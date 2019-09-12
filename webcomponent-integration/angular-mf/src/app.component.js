export class AppComponent {
    static component = {
        template: `
            <div>
                <h3>Name: {{ $ctrl.config.title }}</h3>
                <br/>
                <p>Description: {{ $ctrl.hello }}</p>
            </div>
        `,
        controller: AppComponent,
    };

    static $inject = ['$http', 'config'];

    hello = 'Angular Application using Web Components. Used attribute for cross application communication';

    constructor($http, config) {
        this.$http = $http;
        this.config = config;
    }
}
