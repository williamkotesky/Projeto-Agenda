import 'core-js/stable';
import 'regenerator-runtime/runtime';

import './assets/css/styles.css';

import Login from './modules/Login';
import CadastroContato from './modules/CadastroContato';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');

login.init();
cadastro.init();

const cadastroContato = new CadastroContato('.cadastro-contato');

cadastroContato.init();



