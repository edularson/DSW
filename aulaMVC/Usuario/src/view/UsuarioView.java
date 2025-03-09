package view;

import javax.swing.*;
import java.awt.event.ActionListener;

public class UsuarioView {
    private JFrame frame;
    private JTextField campoNome;
    private JTextField campoSobrenome;
    private JTextField campoEmail;
    private JTextArea areaTexto;

    public UsuarioView() {

        frame = new JFrame("Cadastro de Usuário");
        frame.setSize(400, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(null);

        JLabel labelNome = new JLabel("Nome:");
        labelNome.setBounds(20, 20, 80, 25);
        frame.add(labelNome);

        JLabel labelSobrenome = new JLabel("Sobrenome:");
        labelSobrenome.setBounds(20, 50, 80, 25);
        frame.add(labelSobrenome);

        JLabel labelEmail = new JLabel("Email:");
        labelEmail.setBounds(20, 80, 80, 25);
        frame.add(labelEmail);

        campoNome = new JTextField();
        campoNome.setBounds(100, 20, 200, 25);
        frame.add(campoNome);

        campoSobrenome = new JTextField();
        campoSobrenome.setBounds(100, 50, 200, 25);
        frame.add(campoSobrenome);

        campoEmail = new JTextField();
        campoEmail.setBounds(100, 80, 200, 25);
        frame.add(campoEmail);

        JButton botaoSalvar = new JButton("Salvar");
        botaoSalvar.setBounds(150, 120, 100, 25);
        frame.add(botaoSalvar);

        areaTexto = new JTextArea();
        areaTexto.setBounds(20, 160, 350, 80);
        areaTexto.setEditable(false);
        frame.add(areaTexto);

        frame.setVisible(true);
    }

    public String getNome() {
        return campoNome.getText();
    }

    public String getSobrenome() {
        return campoSobrenome.getText();
    }

    public String getEmail() {
        return campoEmail.getText();
    }

    public void exibirDados(String dados) {
        areaTexto.setText(dados);
    }

    public void adicionarListener(ActionListener listener) {
        JButton botaoEnviar = (JButton) frame.getContentPane().getComponent(6);
        botaoEnviar.addActionListener(listener);
    }
}
