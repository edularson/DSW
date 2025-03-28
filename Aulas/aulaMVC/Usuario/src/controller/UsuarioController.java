package controller;

import model.Usuario;
import view.UsuarioView;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class UsuarioController {
    
    private UsuarioView view;
    private Usuario model;

    public UsuarioController(UsuarioView view, Usuario model) {
        this.view = view;
        this.model = model;

        this.view.adicionarListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                model.setNome(view.getNome());
                model.setSobrenome(view.getSobrenome());
                model.setEmail(view.getEmail());

                String dados = "Nome: " + model.getNome() + "\nSobrenome: " + model.getSobrenome() + "\nEmail: " + model.getEmail();
                view.exibirDados(dados);
            }
        });
    }
}
