# backend_questions

## PICO   VALENTIN

### 1. High-Throughput API for Cryptocurrency Trading Platform

You’re building a high-throughput API for a cryptocurrency trading platform. For this platform, time is extremely important because microseconds count when processing high-volume trade orders. For communicating with the API, you want to choose the verb that is fastest for read-only operations. What verb should you choose for retrieving trade orders with the API server?

- 1. GET
- 2. UPDATE
- 3. DELETE
- 4. POST


###### Respuesta: **_1.GET_**
GET es utilizado para operaciones de solo lectura en APIs y es el más eficiente cuando se trata de recuperar información.

---

### 2. CRM API Request Path

You work for a Customer Relationship Management (CRM) company. The company's clients gain CRM access through a RESTful API. The CRM allows clients to add contact information for customers, prospects, and related persons (e.g., virtual assistants or marketing directors). You want to choose an appropriate API request path so clients can easily retrieve information for a single contact while also being flexible for future software changes. Which of the following API paths should you use?

- 1. /customers/{customer_id}
- 2. /contacts/{contact_id}
- 3. /contacts/{contact_type}/all
- 4. /customers/all
2./contacts/{contact_id}
###### Respuesta:    **_2./contacts/{contact_id}_** 
Este opción es la más especifica para obtener la información de un contacto individual, utilizando su ID.

---

### 3. Error Handling for API Authentication Failures

You work for a large social media network, and you've been tasked with error handling for the API. You're trying to decide on an appropriate error code for authentication failures based on non-existent users and incorrect passwords. You want to balance security against brute force attacks with providing descriptive and true error codes. Which HTTP error code(s) should you use to keep the system secure and still report that an error occurred?

- 1. 404 if the user doesn't exist, and 403 if the password is wrong.
- 2. 403 if the user doesn't exist, and 401 if the password is wrong.
- 3. 500 if the user doesn't exist or if the password is wrong.
- 4. 401 if the user doesn't exist or if the password is wrong.


###### Respuesta: **_401 if the user doesn't exist or if the password is wrong_**
Este código ayuda a mantener la seguridad al no proporcionar información muy específica pero si motrando un error

---

### 4. UUID Example in Documentation

You’re writing documentation for requesting information about a given user in your system. Your system uses UUIDs (universally unique identifiers) as user identifiers. In your documentation, you want to show an example. True or false: You should put a fake UUID into the example code (instead of just the text "UUID") as a placeholder.

- 1. TRUE
- 2. FALSE
 
###### Respuesta: **1._TRUE_**
poner un UUID de ejemplo eria muy claro y ayudaría a los desarrolladores a entender mejor cómo debe ser el formato del id.

##### Ejemplo: 
GET /users/123e4567-e89b-12d3-a456-426614174000

---

### 5. Handle Errors from Remote API Server

You’re building code to handle errors issued from a remote API server. The response may or may not have an error. How much work should your method, handleErrors(response), handle?

- 1. Check for the presence of an error. If it exists, then set a class property to the error.
- 2. Check for the presence of an error. If it exists, throw an exception with the error.
- 3. Check for the presence of an error. If it exists, set a class property to the error, then throw an exception.

###### Respuesta: **_3. Check for the presence of an error. If it exists, set a class property to the error, then throw an exception_**
Esta opción permite almacenar el error para que sea accesible en la clase, y al mismo tiempo lanzar una excepción para manejar el flujo de errores correctamente

#### codigo de muestra en: [pregunta_5.ts](https://github.com/Valentinpico/backend_questions/blob/main/pregunta_5.ts)

---

### 6. Error Handling Implementation for Multiple Classes

You have two classes: a database driver and an email driver. Both classes need to set errors so that your front-end interface displays any errors that transpire on your platform. Which way should you implement this error handling?

- 1. Write the error handling the same way in both classes, but keep it to one line of code.
- 2. Make a trait to handle errors so it'll collect errors in any class that uses it.
- 3. Make a driver-based error provider to handle errors in all classes that can issue errors.

###### Respuesta: **_3. Make a driver-based error provider to handle errors in all classes that can issue errors._**

---

### 7. Naming Private Method for eCommerce Products

You need to name the private method in your class that handles looping through eCommerce products to collect and parse data. That data gets stored in an array and set as a class property. Which of the following should you use to name your method?

- 1. loopThroughProductsAndParseData()
- 2. loopProductsAndParse()
- 3. parseDataForProducts()
- 4. parseDataForProductsAndSetArray()

###### Respuesta: **_2. loopProductsAndParse()._**
Este nombre para el método es muy descriptivo para lo que se quiere hacer

#### codigo de muestra en: [pregunta_7.ts](https://github.com/Valentinpico/backend_questions/blob/main/pregunta_8.ts)

---

### 8. Strategy for Storing Database Credentials

There are multiple places in your codebase that need to access the database. To access the database, you need to supply credentials. You want to balance security with usability. What strategy should you use to store and access these credentials?

- 1. Put them in the code that connects to the database for each place that needs database access.
- 2. Put them in a configuration file, then include that file in the code everywhere that needs to access the database.
- 3. Put the credentials into a configuration file, then load them with a database service provider.
- 4. Put them in a .env file, load data from it into a configuration system, then request the credentials from a database service provider.


###### Respuesta: **_4. Put them in a .env file, load data from it into a configuration system, then request the credentials from a database service provider._**
Esta opción permite  mantener las credenciales fuera del código y es de fácil configuracion en varios entornos y no cambia el código

#### codigo de muestra en: [pregunta_8.ts](https://github.com/Valentinpico/backend_questions/blob/main/pregunta_8.ts)
