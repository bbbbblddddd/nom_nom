package nom_nom.controllers;

import nom_nom.models.Tip;
import nom_nom.models.User;
import nom_nom.repositories.TipRepository;
import nom_nom.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class TipController {

    @Autowired
    TipRepository tipRepository;

    @GetMapping(value = "/tips")
    public ResponseEntity<List<Tip>> getAllTips(){
        return new ResponseEntity<>(tipRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/tips/{id}")
    public ResponseEntity getTip(@PathVariable Long id){
        return new ResponseEntity<>(tipRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/tips")
    public ResponseEntity<Tip> createTip(@RequestBody Tip tip){
        tipRepository.save(tip);
        return new ResponseEntity<>(tip, HttpStatus.CREATED);
    }
}
}
