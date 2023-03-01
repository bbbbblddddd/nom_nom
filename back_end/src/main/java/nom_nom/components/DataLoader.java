package nom_nom.components;

import nom_nom.models.User;
import nom_nom.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Profile("!test")
@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    UserRepository userRepository;
    @Override
    public void run(ApplicationArguments args) throws Exception {

        User jill = new User("jilleatkins@gmail.com", "I<3KFC!");
        userRepository.save(jill);

    }
}
