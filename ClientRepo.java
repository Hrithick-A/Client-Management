package com.fs.smp.Repo;

import com.fs.smp.Entity.Client;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ClientRepo extends MongoRepository<Client, String> {
}
