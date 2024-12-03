import Vue from 'vue';
import Router from 'vue-router';
import AcceuilTemplate from "@/components/AcceuilTemplate.vue";
import ImageTemplate from "@/components/ImageTemplate.vue";
import TexteTemplate from "@/components/TexteTemplate.vue";
import PresentMe from "@/components/PresentMe.vue";


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Accueil',
            component: AcceuilTemplate
        },
        {
            path: '/template-image',
            name: 'TemplateImage',
            component: ImageTemplate
        },
        {
            path: '/template-texte',
            name: 'TemplateTexte',
        component: TexteTemplate
        },
        {
            path: '/present-me',
            name: 'PresentMe',
            component: PresentMe
        }
    ]
});
