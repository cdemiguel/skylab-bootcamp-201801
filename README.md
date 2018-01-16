# Skylab 2018

## Fullstack Web development 2018 Bootcamp

Se introduce el repositorio de dicho bootcamp entendidos en dos fases:
- Curso
- Precurso

##Precurso
Encontraremos los ejercicios iniciales del Bootcamp. Compuestos en 4 temas sobre:
- Var / Loops Condicionales - Tema 0
- Metodos - Tema 1
- Objetos - Tema 2
- Funciones - Tema 3
- Challenges / retos Tema 4

y dos ejercicios completos (html|css|js):
- Pasapalabra
- Calculadora

##Curso
Sobre el curso se irá añadiendo contenido especificado y contenido dado. Aunque no se encuentre en archivos.


**Estructura de carpetas:**
```sh
│   README.md
│
├───course
│   └───commander_exercise
│       └───frontend
│           └───helloworld
│               │   index.html
│               │
│               ├───scripts
│               │       main.js
│               │
│               └───styles
│                       styles.css
│
└───precourse
    │   project4_pasapalabra_cdemiguel.zip
    │   README.md
    │
    ├───project1_calculadora
    │       calculadora.css
    │       calculadora.html
    │       calculadora.js
    │
    ├───project4_pasapalabra
    │   │   project4.html
    │   │
    │   ├───css
    │   │       project4.css
    │   │       uikit.min.css
    │   │
    │   └───js
    │           project4.js
    │
    ├───tema0-pc
    │       exercises0.js
    │
    ├───tema1-pc
    │       exercises1.js
    │       project1.js
    │
    ├───tema2-pc
    │       exercises2.js
    │       project2.js
    │
    ├───tema3-pc
    │       exercises3.js
    │       project3.html
    │       project3.js
    │
    └───tema4-pc
        │   exercises4.html
        │   exercises4c.html
        │
        └───Project4_noHtml
                project4.html
                project4.js
```


```
skylab
├── course
│   └── frontend
└── precourse
```

Make sure you create this folder in your documents folder 

Hint: you may use the commands pwd, mkdir, cd.

### **Step 1**: Copy the contents of your precourse into precourse folder.

Hint: command cp -r ...

### **Step 2**: Download and unzip *hiWorld.zip* from slack channel.

- Unzip the hiWorld.zip file in skylab/course/frontend/hiWorld, the final result should be:

```
skylab
├── course
│   └── frontend
│       └── hiWorld
│           ├── deleteMePlease
│           │   └── meToo.js
│           ├── indice.html
│           └── scripts.js
└── precourse
```

### **Step 3**: Clean the project

- Rename the project folder *hiWorld* to *helloworld*
- Go to folder *helloworld*
- Remove the folder *deleteMePlease* 
- List the project folder to check the changes

Hint: commands rm, ls, ...

### **Step 4**: Adjust some files 

- Rename *script.js* to *main.js*
- Rename *indice.html* to *index.html* 
- Write these lines in *index.html* (use Notepad in Windows or TextEdit in Mac)

```html
<html>
    <head>
        <meta charset="UTF-8">
    <title>Document</title>
        <link rel="stylesheet" href="styles/styles.css">
    </head>
    <body>
        hello world!
    </body>
    <script src="scripts/main.js">
    </script>
</html>
```

- List the project folder to check the changes

Hint: mv...

### **Step 5**: Create a file

- Check that you are in helloworld folder, otherwise go to it
- Create a file named main.css
- Write these lines in *main.css* 

```css
body{
    color:plum;
    font-size:120px;
}
```

Hints: command touch ...

### **Step 6**: Make Directory

- Make the *styles* and *scripts* folders in helloworld

Hint: mkdir ...

### **Step 7**: Move files

- Move main.css to styles folder
- Move main.js to scripts folder

Hint: mv ...

### **Step 8**: Check the project

- The final result should be this:

```
skylab
├── course
│   └── frontend
│       └── helloworld
│           ├── index.html
│           ├── scripts
│           │   └── main.js
│           └── styles
│               └── main.css
└── precourse
    └── (your precourse files)
```

- Open index.html with your browser and see the results, you should see a welcome alert and a web page with hello world.
