import * as dotenv from 'dotenv';
dotenv.config();

class DatabaseService {
    private dbUser: string;
    private dbPassword: string;
    private dbHost: string;
    private dbPort: number;

    constructor() {
        this.dbUser = process.env.DB_USER || '';
        this.dbPassword = process.env.DB_PASSWORD || '';
        this.dbHost = process.env.DB_HOST || '';
        this.dbPort = parseInt(process.env.DB_PORT || '0');
    }

    connect() {
        console.log(`conectando a ${this.dbHost}:${this.dbPort} con el usuario ${this.dbUser}`);
    }
}