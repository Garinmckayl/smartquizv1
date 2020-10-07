package com.anchormind.smartquiz.web.rest;

import com.anchormind.smartquiz.SmartquizApp;
import com.anchormind.smartquiz.domain.QuizAttempt;
import com.anchormind.smartquiz.repository.QuizAttemptRepository;
import com.anchormind.smartquiz.service.QuizAttemptService;
import com.anchormind.smartquiz.service.dto.QuizAttemptDTO;
import com.anchormind.smartquiz.service.mapper.QuizAttemptMapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import java.time.Instant;
import java.time.ZonedDateTime;
import java.time.ZoneOffset;
import java.time.ZoneId;
import java.util.List;

import static com.anchormind.smartquiz.web.rest.TestUtil.sameInstant;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@link QuizAttemptResource} REST controller.
 */
@SpringBootTest(classes = SmartquizApp.class)
@AutoConfigureMockMvc
@WithMockUser
public class QuizAttemptResourceIT {

    private static final Integer DEFAULT_ATTEMPTED = 1;
    private static final Integer UPDATED_ATTEMPTED = 2;

    private static final Integer DEFAULT_SCORE = 1;
    private static final Integer UPDATED_SCORE = 2;

    private static final Integer DEFAULT_MAX_SCORE = 1;
    private static final Integer UPDATED_MAX_SCORE = 2;

    private static final String DEFAULT_CREATED_BY = "AAAAAAAAAA";
    private static final String UPDATED_CREATED_BY = "BBBBBBBBBB";

    private static final ZonedDateTime DEFAULT_CREATED_DATE = ZonedDateTime.ofInstant(Instant.ofEpochMilli(0L), ZoneOffset.UTC);
    private static final ZonedDateTime UPDATED_CREATED_DATE = ZonedDateTime.now(ZoneId.systemDefault()).withNano(0);

    private static final String DEFAULT_UPDATED_BY = "AAAAAAAAAA";
    private static final String UPDATED_UPDATED_BY = "BBBBBBBBBB";

    private static final ZonedDateTime DEFAULT_UPDATED_DATE = ZonedDateTime.ofInstant(Instant.ofEpochMilli(0L), ZoneOffset.UTC);
    private static final ZonedDateTime UPDATED_UPDATED_DATE = ZonedDateTime.now(ZoneId.systemDefault()).withNano(0);

    @Autowired
    private QuizAttemptRepository quizAttemptRepository;

    @Autowired
    private QuizAttemptMapper quizAttemptMapper;

    @Autowired
    private QuizAttemptService quizAttemptService;

    @Autowired
    private MockMvc restQuizAttemptMockMvc;

    private QuizAttempt quizAttempt;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static QuizAttempt createEntity() {
        QuizAttempt quizAttempt = new QuizAttempt()
            .attempted(DEFAULT_ATTEMPTED)
            .score(DEFAULT_SCORE)
            .maxScore(DEFAULT_MAX_SCORE)
            .createdBy(DEFAULT_CREATED_BY)
            .createdDate(DEFAULT_CREATED_DATE)
            .updatedBy(DEFAULT_UPDATED_BY)
            .updatedDate(DEFAULT_UPDATED_DATE);
        return quizAttempt;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static QuizAttempt createUpdatedEntity() {
        QuizAttempt quizAttempt = new QuizAttempt()
            .attempted(UPDATED_ATTEMPTED)
            .score(UPDATED_SCORE)
            .maxScore(UPDATED_MAX_SCORE)
            .createdBy(UPDATED_CREATED_BY)
            .createdDate(UPDATED_CREATED_DATE)
            .updatedBy(UPDATED_UPDATED_BY)
            .updatedDate(UPDATED_UPDATED_DATE);
        return quizAttempt;
    }

    @BeforeEach
    public void initTest() {
        quizAttemptRepository.deleteAll();
        quizAttempt = createEntity();
    }

    @Test
    public void createQuizAttempt() throws Exception {
        int databaseSizeBeforeCreate = quizAttemptRepository.findAll().size();
        // Create the QuizAttempt
        QuizAttemptDTO quizAttemptDTO = quizAttemptMapper.toDto(quizAttempt);
        restQuizAttemptMockMvc.perform(post("/api/quiz-attempts")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(quizAttemptDTO)))
            .andExpect(status().isCreated());

        // Validate the QuizAttempt in the database
        List<QuizAttempt> quizAttemptList = quizAttemptRepository.findAll();
        assertThat(quizAttemptList).hasSize(databaseSizeBeforeCreate + 1);
        QuizAttempt testQuizAttempt = quizAttemptList.get(quizAttemptList.size() - 1);
        assertThat(testQuizAttempt.getAttempted()).isEqualTo(DEFAULT_ATTEMPTED);
        assertThat(testQuizAttempt.getScore()).isEqualTo(DEFAULT_SCORE);
        assertThat(testQuizAttempt.getMaxScore()).isEqualTo(DEFAULT_MAX_SCORE);
        assertThat(testQuizAttempt.getCreatedBy()).isEqualTo(DEFAULT_CREATED_BY);
        assertThat(testQuizAttempt.getCreatedDate()).isEqualTo(DEFAULT_CREATED_DATE);
        assertThat(testQuizAttempt.getUpdatedBy()).isEqualTo(DEFAULT_UPDATED_BY);
        assertThat(testQuizAttempt.getUpdatedDate()).isEqualTo(DEFAULT_UPDATED_DATE);
    }

    @Test
    public void createQuizAttemptWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = quizAttemptRepository.findAll().size();

        // Create the QuizAttempt with an existing ID
        quizAttempt.setId("existing_id");
        QuizAttemptDTO quizAttemptDTO = quizAttemptMapper.toDto(quizAttempt);

        // An entity with an existing ID cannot be created, so this API call must fail
        restQuizAttemptMockMvc.perform(post("/api/quiz-attempts")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(quizAttemptDTO)))
            .andExpect(status().isBadRequest());

        // Validate the QuizAttempt in the database
        List<QuizAttempt> quizAttemptList = quizAttemptRepository.findAll();
        assertThat(quizAttemptList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    public void checkCreatedByIsRequired() throws Exception {
        int databaseSizeBeforeTest = quizAttemptRepository.findAll().size();
        // set the field null
        quizAttempt.setCreatedBy(null);

        // Create the QuizAttempt, which fails.
        QuizAttemptDTO quizAttemptDTO = quizAttemptMapper.toDto(quizAttempt);


        restQuizAttemptMockMvc.perform(post("/api/quiz-attempts")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(quizAttemptDTO)))
            .andExpect(status().isBadRequest());

        List<QuizAttempt> quizAttemptList = quizAttemptRepository.findAll();
        assertThat(quizAttemptList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void checkCreatedDateIsRequired() throws Exception {
        int databaseSizeBeforeTest = quizAttemptRepository.findAll().size();
        // set the field null
        quizAttempt.setCreatedDate(null);

        // Create the QuizAttempt, which fails.
        QuizAttemptDTO quizAttemptDTO = quizAttemptMapper.toDto(quizAttempt);


        restQuizAttemptMockMvc.perform(post("/api/quiz-attempts")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(quizAttemptDTO)))
            .andExpect(status().isBadRequest());

        List<QuizAttempt> quizAttemptList = quizAttemptRepository.findAll();
        assertThat(quizAttemptList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void checkUpdatedByIsRequired() throws Exception {
        int databaseSizeBeforeTest = quizAttemptRepository.findAll().size();
        // set the field null
        quizAttempt.setUpdatedBy(null);

        // Create the QuizAttempt, which fails.
        QuizAttemptDTO quizAttemptDTO = quizAttemptMapper.toDto(quizAttempt);


        restQuizAttemptMockMvc.perform(post("/api/quiz-attempts")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(quizAttemptDTO)))
            .andExpect(status().isBadRequest());

        List<QuizAttempt> quizAttemptList = quizAttemptRepository.findAll();
        assertThat(quizAttemptList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void checkUpdatedDateIsRequired() throws Exception {
        int databaseSizeBeforeTest = quizAttemptRepository.findAll().size();
        // set the field null
        quizAttempt.setUpdatedDate(null);

        // Create the QuizAttempt, which fails.
        QuizAttemptDTO quizAttemptDTO = quizAttemptMapper.toDto(quizAttempt);


        restQuizAttemptMockMvc.perform(post("/api/quiz-attempts")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(quizAttemptDTO)))
            .andExpect(status().isBadRequest());

        List<QuizAttempt> quizAttemptList = quizAttemptRepository.findAll();
        assertThat(quizAttemptList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void getAllQuizAttempts() throws Exception {
        // Initialize the database
        quizAttemptRepository.save(quizAttempt);

        // Get all the quizAttemptList
        restQuizAttemptMockMvc.perform(get("/api/quiz-attempts?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(quizAttempt.getId())))
            .andExpect(jsonPath("$.[*].attempted").value(hasItem(DEFAULT_ATTEMPTED)))
            .andExpect(jsonPath("$.[*].score").value(hasItem(DEFAULT_SCORE)))
            .andExpect(jsonPath("$.[*].maxScore").value(hasItem(DEFAULT_MAX_SCORE)))
            .andExpect(jsonPath("$.[*].createdBy").value(hasItem(DEFAULT_CREATED_BY)))
            .andExpect(jsonPath("$.[*].createdDate").value(hasItem(sameInstant(DEFAULT_CREATED_DATE))))
            .andExpect(jsonPath("$.[*].updatedBy").value(hasItem(DEFAULT_UPDATED_BY)))
            .andExpect(jsonPath("$.[*].updatedDate").value(hasItem(sameInstant(DEFAULT_UPDATED_DATE))));
    }
    
    @Test
    public void getQuizAttempt() throws Exception {
        // Initialize the database
        quizAttemptRepository.save(quizAttempt);

        // Get the quizAttempt
        restQuizAttemptMockMvc.perform(get("/api/quiz-attempts/{id}", quizAttempt.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(quizAttempt.getId()))
            .andExpect(jsonPath("$.attempted").value(DEFAULT_ATTEMPTED))
            .andExpect(jsonPath("$.score").value(DEFAULT_SCORE))
            .andExpect(jsonPath("$.maxScore").value(DEFAULT_MAX_SCORE))
            .andExpect(jsonPath("$.createdBy").value(DEFAULT_CREATED_BY))
            .andExpect(jsonPath("$.createdDate").value(sameInstant(DEFAULT_CREATED_DATE)))
            .andExpect(jsonPath("$.updatedBy").value(DEFAULT_UPDATED_BY))
            .andExpect(jsonPath("$.updatedDate").value(sameInstant(DEFAULT_UPDATED_DATE)));
    }
    @Test
    public void getNonExistingQuizAttempt() throws Exception {
        // Get the quizAttempt
        restQuizAttemptMockMvc.perform(get("/api/quiz-attempts/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    public void updateQuizAttempt() throws Exception {
        // Initialize the database
        quizAttemptRepository.save(quizAttempt);

        int databaseSizeBeforeUpdate = quizAttemptRepository.findAll().size();

        // Update the quizAttempt
        QuizAttempt updatedQuizAttempt = quizAttemptRepository.findById(quizAttempt.getId()).get();
        updatedQuizAttempt
            .attempted(UPDATED_ATTEMPTED)
            .score(UPDATED_SCORE)
            .maxScore(UPDATED_MAX_SCORE)
            .createdBy(UPDATED_CREATED_BY)
            .createdDate(UPDATED_CREATED_DATE)
            .updatedBy(UPDATED_UPDATED_BY)
            .updatedDate(UPDATED_UPDATED_DATE);
        QuizAttemptDTO quizAttemptDTO = quizAttemptMapper.toDto(updatedQuizAttempt);

        restQuizAttemptMockMvc.perform(put("/api/quiz-attempts")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(quizAttemptDTO)))
            .andExpect(status().isOk());

        // Validate the QuizAttempt in the database
        List<QuizAttempt> quizAttemptList = quizAttemptRepository.findAll();
        assertThat(quizAttemptList).hasSize(databaseSizeBeforeUpdate);
        QuizAttempt testQuizAttempt = quizAttemptList.get(quizAttemptList.size() - 1);
        assertThat(testQuizAttempt.getAttempted()).isEqualTo(UPDATED_ATTEMPTED);
        assertThat(testQuizAttempt.getScore()).isEqualTo(UPDATED_SCORE);
        assertThat(testQuizAttempt.getMaxScore()).isEqualTo(UPDATED_MAX_SCORE);
        assertThat(testQuizAttempt.getCreatedBy()).isEqualTo(UPDATED_CREATED_BY);
        assertThat(testQuizAttempt.getCreatedDate()).isEqualTo(UPDATED_CREATED_DATE);
        assertThat(testQuizAttempt.getUpdatedBy()).isEqualTo(UPDATED_UPDATED_BY);
        assertThat(testQuizAttempt.getUpdatedDate()).isEqualTo(UPDATED_UPDATED_DATE);
    }

    @Test
    public void updateNonExistingQuizAttempt() throws Exception {
        int databaseSizeBeforeUpdate = quizAttemptRepository.findAll().size();

        // Create the QuizAttempt
        QuizAttemptDTO quizAttemptDTO = quizAttemptMapper.toDto(quizAttempt);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restQuizAttemptMockMvc.perform(put("/api/quiz-attempts")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(quizAttemptDTO)))
            .andExpect(status().isBadRequest());

        // Validate the QuizAttempt in the database
        List<QuizAttempt> quizAttemptList = quizAttemptRepository.findAll();
        assertThat(quizAttemptList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    public void deleteQuizAttempt() throws Exception {
        // Initialize the database
        quizAttemptRepository.save(quizAttempt);

        int databaseSizeBeforeDelete = quizAttemptRepository.findAll().size();

        // Delete the quizAttempt
        restQuizAttemptMockMvc.perform(delete("/api/quiz-attempts/{id}", quizAttempt.getId())
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<QuizAttempt> quizAttemptList = quizAttemptRepository.findAll();
        assertThat(quizAttemptList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
