#Ember-mela

Creating an app for melasi.pythonanywhere.com using EmberJS CLI.

The point of this project was to compare the outcome in size and time spent on a project with the following conditions:

first project is created without use of any framework, only a bit of jQuery to handle Ajax call and DOM manipulation. MVC design pattern was used as the basis. You can look at the repositary with this project at https://github.com/armikhalev/melasi_frontend . Second project was utilizing Aurelia framework. Third project was using Angular2.4 framework (indicating version bcse it changes rapidly). Third project was using VueJS2. Fourth (this) project is using EmberJS 2.
All frameworky project use Bootstrap for styling which is 37kB minified.

Outcome:

non-frameworky project not minified needed to run the app files are 145.5 kB. Time spent about 20 hours.

Aurelia project needed to run the app files are 701Kb Minified by the cli in production mode. Time spent about 8 hours not including configuration and learning of the basics. Notice that Aurelia project is reusing some of the styles and approaches from the non-frameworky project.

Angular project needed to run the app files are 898.6kb Minified by the cli in production mode and aot. Time spent about 4 hours not including configuration and learning of the basics. Notice that Angular project is reusing some of the styles and approaches from the Aurelia project.

VueJS with the standard command 'npm run build' created many files 1.4mB in size, but by exluding .map.js files it became only 235kb. Time spent on the project, about 3hours.