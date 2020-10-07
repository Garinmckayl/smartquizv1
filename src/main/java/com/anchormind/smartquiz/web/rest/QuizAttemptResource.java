package com.anchormind.smartquiz.web.rest;

import com.anchormind.smartquiz.service.QuizAttemptService;
import com.anchormind.smartquiz.service.QuizService;
import com.anchormind.smartquiz.service.dto.QuizAttemptDTO;
import com.anchormind.smartquiz.service.dto.QuizDTO;
import com.anchormind.smartquiz.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.PaginationUtil;
import io.github.jhipster.web.util.ResponseUtil;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;
import javax.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

/**
 * REST controller for managing {@link com.anchormind.smartquiz.domain.QuizAttempt}.
 */
@RestController
@RequestMapping("/api")
public class QuizAttemptResource {

    private final Logger log = LoggerFactory.getLogger(QuizAttemptResource.class);

    private static final String ENTITY_NAME = "quizAttempt";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;


    private final QuizService quizService;
    private final QuizAttemptService quizAttemptService;

    public QuizAttemptResource(
        QuizService quizService,
        QuizAttemptService quizAttemptService
    ) {
        this.quizService = quizService;
        this.quizAttemptService = quizAttemptService;
    }

    /**

     * {@code POST  /quiz-attempts} : Create a new quizAttempt.
     *
     * @param quizAttemptDTO the quizAttemptDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new quizAttemptDTO, or with status {@code 400 (Bad Request)} if the quizAttempt has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */

    @PostMapping("/quiz-attempts")
    public ResponseEntity<QuizAttemptDTO> createQuizAttempt(
        @Valid
        @RequestBody
            QuizAttemptDTO quizAttemptDTO
    ) throws URISyntaxException {
        log.debug("REST request to save QuizAttempt : {}", quizAttemptDTO);
        if (quizAttemptDTO.getId() != null) {
            throw new BadRequestAlertException("A new quizAttempt cannot already have an ID", ENTITY_NAME, "idexists");
        }

        QuizDTO quiz = quizService.findOne(quizAttemptDTO.getQuiz().getId()).get();
        if (quiz == null) {
            throw new BadRequestAlertException("Quiz does not exist for the provided Id", ENTITY_NAME, "invalidQuizId");
        }
        quizAttemptDTO.setQuiz(quiz);
        QuizAttemptDTO result = quizAttemptService.save(quizAttemptDTO);
        return ResponseEntity.created(new URI("/api/quiz-attempts/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId()))
            .body(result);
    }

    /**
     * {@code PUT  /quiz-attempts} : Updates an existing quizAttempt.
     *
     * @param quizAttemptDTO the quizAttemptDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated quizAttemptDTO,
     * or with status {@code 400 (Bad Request)} if the quizAttemptDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the quizAttemptDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */

    @PutMapping("/quiz-attempts")
    public ResponseEntity<QuizAttemptDTO> updateQuizAttempt(
        @Valid
        @RequestBody QuizAttemptDTO quizAttemptDTO
    ) throws URISyntaxException {
        log.debug("REST request to update QuizAttempt : {}", quizAttemptDTO);
        if (quizAttemptDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }

        QuizDTO quiz = quizService.findOne(quizAttemptDTO.getQuiz().getId()).get();
        if (quiz == null) {
            throw new BadRequestAlertException("Quiz does not exist for the provided Id", ENTITY_NAME, "invalidQuizId");
        }
        QuizAttemptDTO result = quizAttemptService.save(quizAttemptDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, quizAttemptDTO.getId()))
            .body(result);
    }

    /**
     * {@code GET  /quiz-attempts} : get all the quizAttempts.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of quizAttempts in body.
     */
    @GetMapping("/quiz-attempts")
    public ResponseEntity<List<QuizAttemptDTO>> getAllQuizAttempts(Pageable pageable) {
        log.debug("REST request to get a page of QuizAttempts");
        Page<QuizAttemptDTO> page = quizAttemptService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /quiz-attempts/:id} : get the "id" quizAttempt.
     *
     * @param id the id of the quizAttemptDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the quizAttemptDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/quiz-attempts/{id}")
    public ResponseEntity<QuizAttemptDTO> getQuizAttempt(@PathVariable String id) {
        log.debug("REST request to get QuizAttempt : {}", id);
        Optional<QuizAttemptDTO> quizAttemptDTO = quizAttemptService.findOne(id);
        return ResponseUtil.wrapOrNotFound(quizAttemptDTO);
    }

    /**
     * {@code DELETE  /quiz-attempts/:id} : delete the "id" quizAttempt.
     *
     * @param id the id of the quizAttemptDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/quiz-attempts/{id}")
    public ResponseEntity<Void> deleteQuizAttempt(@PathVariable String id) {
        log.debug("REST request to delete QuizAttempt : {}", id);
        quizAttemptService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id)).build();
    }
}
