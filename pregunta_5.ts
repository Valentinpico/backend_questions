class ApiResponseHandler {
    errorMessage: string | null = null;

    handleErrors(response: Response): Promise<any> {
        if (!response.ok) {
            const error = response.statusText || 'Unknown Error';
            this.errorMessage = error; 
            throw new Error(error); 
        }
        return response.json();
    }
}