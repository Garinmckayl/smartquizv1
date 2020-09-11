package com.anchormind.smartquiz.config;

import com.github.cloudyrock.mongock.driver.mongodb.springdata.v3.SpringDataMongo3Driver;
import com.github.cloudyrock.spring.v5.MongockSpring5;
import io.github.jhipster.config.JHipsterConstants;
import io.github.jhipster.domain.util.JSR310DateConverters.DateToZonedDateTimeConverter;
import io.github.jhipster.domain.util.JSR310DateConverters.ZonedDateTimeToDateConverter;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.Profile;
import org.springframework.core.convert.converter.Converter;
import org.springframework.data.mongodb.config.EnableMongoAuditing;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.convert.MongoCustomConversions;
import org.springframework.data.mongodb.core.mapping.event.ValidatingMongoEventListener;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;

@Configuration
@EnableMongoRepositories("com.anchormind.smartquiz.repository")
@Profile("!" + JHipsterConstants.SPRING_PROFILE_CLOUD)
@Import(value = MongoAutoConfiguration.class)
@EnableMongoAuditing(auditorAwareRef = "springSecurityAuditorAware")
public class DatabaseConfiguration {

    @Bean
    public ValidatingMongoEventListener validatingMongoEventListener() {
        return new ValidatingMongoEventListener(validator());
    }

    @Bean
    public LocalValidatorFactoryBean validator() {
        return new LocalValidatorFactoryBean();
    }

    @Bean
    public MongoCustomConversions customConversions() {
        List<Converter<?, ?>> converters = new ArrayList<>();
        converters.add(DateToZonedDateTimeConverter.INSTANCE);
        converters.add(ZonedDateTimeToDateConverter.INSTANCE);
        return new MongoCustomConversions(converters);
    }

    @Bean
    public MongockSpring5.MongockInitializingBeanRunner mongockInitializingBeanRunner(ApplicationContext springContext,
        MongoTemplate mongoTemplate,
        @Value("${mongock.lock.lockAcquiredForMinutes:5}") long lockAcquiredForMinutes,
        @Value("${mongock.lock.maxWaitingForLockMinutes:3}") long maxWaitingForLockMinutes,
        @Value("${mongock.lock.maxTries:3}") int maxTries) {
        SpringDataMongo3Driver driver = SpringDataMongo3Driver.withLockSetting(mongoTemplate, lockAcquiredForMinutes, maxWaitingForLockMinutes, maxTries);
        return MongockSpring5.builder()
            .setDriver(driver)
            .addChangeLogsScanPackage("<%= packageName %>.config.dbmigrations")
            .setSpringContext(springContext)
            .buildInitializingBeanRunner();
    }
}
