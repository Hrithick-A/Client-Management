package com.fs.smp.Controller;

import com.fs.smp.Entity.Client;
import com.fs.smp.Service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/client")
public class ClientController {
    @Autowired
    private ClientService clientService;

    @PostMapping( "/save")
    private  String saveClient(@RequestBody Client client)
    {
        clientService.saveOrUpdate(client);
        return client.getid();
    }
    @GetMapping( "/getAll")
    public Iterable<Client>getClient()
    {
        return clientService.listAll();
    }

    @PutMapping("/edit/{id}")
    private Client update(@RequestBody Client client, @PathVariable(name = "id")String _id)
    {
        client.setId(_id);
        clientService.saveOrUpdate(client);
        return client;
    }
    @DeleteMapping("/delete/{id}")
    private void deleteClient(@PathVariable("id")String _id)
    {
        clientService.deleteClient(_id);
    }
    @RequestMapping("/client/{id}")
    private Client getClient(@PathVariable(name = "id")String clientid)
    {
        return clientService.getClientById(clientid);
    }

    }
