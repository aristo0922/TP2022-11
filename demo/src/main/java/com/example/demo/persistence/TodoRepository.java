package com.example.demo.persistence;

import com.example.demo.model.TodoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends JpaRepository<TodoEntity, String> {
    List<TodoEntity> findByUserId(String userId);
    // ?1는 메서드의 매개변수의 순서 위치
    @Query("select * from todo t  where t.userId = ?1")
    List<TodoEntity> findByUserId(String userId);
}
