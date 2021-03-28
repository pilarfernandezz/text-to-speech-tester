import { createApp } from 'vue';
import App from './App.vue';
import SolutionBase from './components/API/SolutionBase.vue';
import SolutionGrid from './components/API/SolutionGrid.vue';
import SolutionElement from './components/API/SolutionElement.vue';
import AudioElement from './components/API/AudioElement.vue';
import AudioBase from './components/API/AudioBase.vue';
import TheHeader from './components/layout/TheHeader.vue';
import MainPage from './pages/MainPage.vue';
import VueProgress from 'vue-progress-path';
import router from './router.js';
import ImplementationsSamplesPage from './pages/ImplementationsSamplesPage.vue';
import ImplementationGrid from './components/implementationSample/ImplementationGrid.vue';
import ImplementationElement from './components/implementationSample/ImplementationElement.vue';
import SolutionImplementation from './components/implementationSample/SolutionImplementation.vue';
const app = createApp(App);

app.use(router);

app.component('vue-progress',VueProgress);
app.component('solution-base', SolutionBase);
app.component('solution-grid', SolutionGrid);
app.component('solution-element', SolutionElement);
app.component('the-header', TheHeader);
app.component('audio-base', AudioBase);
app.component('audio-element', AudioElement);
app.component('main-page', MainPage);
app.component('implementation-page', ImplementationsSamplesPage);
app.component('implementation-grid', ImplementationGrid);
app.component('implementation-element', ImplementationElement);
app.component('solution-implementation', SolutionImplementation);

app.mount('#app');
