import { createApp } from 'vue';

import App from './App.vue';
import SolutionBase from './components/SolutionBase.vue';
import SolutionGrid from './components/SolutionGrid.vue';
import SolutionElement from './components/SolutionElement.vue';
import AudioElement from './components/AudioElement.vue';
import AudioBase from './components/AudioBase.vue';
import TheHeader from './components/TheHeader.vue';
import MainPage from './pages/MainPage.vue';

const app = createApp(App);

app.component('solution-base', SolutionBase);
app.component('solution-grid', SolutionGrid);
app.component('solution-element', SolutionElement);
app.component('the-header', TheHeader);
app.component('audio-base', AudioBase);
app.component('audio-element', AudioElement);
app.component('main-page', MainPage);

app.mount('#app');
