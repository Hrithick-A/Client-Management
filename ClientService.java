package com.fs.smp.Service;

import com.fs.smp.Entity.Client;
import com.fs.smp.Repo.ClientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientService {

@Autowired
private ClientRepo repo;
    public void saveOrUpdate(Client client) {

        repo.save(client);

    }

    public Iterable <Client> listAll() {
        return this.repo.findAll();
    }

    public void deleteClient(String id) {
        repo.deleteById(id);
    }

    public Client getClientById(String clientid) {
        return repo.findById(clientid).get();
    }
}
