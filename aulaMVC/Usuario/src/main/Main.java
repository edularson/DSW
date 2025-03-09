package main;

import model.Usuario;
import view.UsuarioView;
import controller.UsuarioController;

public class Main {
    public static void main(String[] args) {
        Usuario model = new Usuario();
        UsuarioView view = new UsuarioView();
        new UsuarioController(view, model);
    }
}
