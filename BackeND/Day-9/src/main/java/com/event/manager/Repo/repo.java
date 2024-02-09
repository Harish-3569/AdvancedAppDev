// package com.event.manager.Repo;

// public interface repo {

// }


package com.event.manager.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event.manager.Entity.*;;



@Repository
public interface repo extends JpaRepository<entity, Integer> {

}