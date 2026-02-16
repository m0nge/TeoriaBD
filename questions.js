// Base de datos de preguntas del cuestionario
const questionsBank = [
    // ============================================
    // SECCIÓN 1: FUNDAMENTOS DE BASE DE DATOS
    // ============================================
    {
        id: 1,
        type: 'multiple',
        question: '¿Qué es una base de datos según la definición del curso?',
        options: [
            'Un programa para crear hojas de cálculo',
            'Un banco de datos producto de la necesidad humana de almacenar información',
            'Un servidor web para almacenar imágenes',
            'Una aplicación móvil para guardar contactos'
        ],
        correct: 1,
        explanation: 'Una base de datos es un banco de datos que surge de la necesidad humana de almacenar información de manera organizada. Ejemplos incluyen guías telefónicas, bibliotecas, archivos personales y expedientes médicos.'
    },
    {
        id: 2,
        type: 'multiple',
        question: '¿Cuál de los siguientes NO es un ejemplo de base de datos relacional mencionado en el curso?',
        options: [
            'SQL Server',
            'MySQL',
            'MongoDB',
            'PostgreSQL'
        ],
        correct: 2,
        explanation: 'MongoDB es una base de datos NoSQL (No relacional). Las bases de datos relacionales mencionadas incluyen SQL Server, MySQL, PostgreSQL, Oracle, MariaDB y SQLite.'
    },
    {
        id: 3,
        type: 'multiple',
        question: '¿En qué década nació System R (IBM), el primer sistema relacional?',
        options: [
            'Años 60',
            'Años 70',
            'Años 80',
            'Años 90'
        ],
        correct: 1,
        explanation: 'En los años 70 nace System R (IBM), el primer sistema relacional. Luego, en los años 80, ANSI e ISO adoptan SQL como estándar (SQL-86), y en los 90s-2000s hubo expansión comercial con SQL Server, MySQL y Oracle.'
    },
    {
        id: 4,
        type: 'multiple',
        question: '¿Cuál es la diferencia principal entre T-SQL y PL/SQL?',
        options: [
            'T-SQL es para Oracle y PL/SQL es para SQL Server',
            'T-SQL es para Microsoft SQL Server/Azure SQL y PL/SQL es para Oracle Database',
            'No hay diferencia, son el mismo lenguaje',
            'T-SQL es más lento que PL/SQL'
        ],
        correct: 1,
        explanation: 'T-SQL (Transact-SQL) es el lenguaje procedural de Microsoft SQL Server y Azure SQL, mientras que PL/SQL es el lenguaje procedural completo de Oracle Database. Ambos extienden SQL estándar con características específicas.'
    },

    // ============================================
    // SECCIÓN 2: TIPOS DE INSTRUCCIONES SQL
    // ============================================
    {
        id: 5,
        type: 'multiple',
        question: '¿Qué significan las siglas DDL en SQL?',
        options: [
            'Data Definition Language',
            'Data Delete Language',
            'Database Definition Logic',
            'Dynamic Data Language'
        ],
        correct: 0,
        explanation: 'DDL significa Data Definition Language (Lenguaje de Definición de Datos). Se utiliza para definir las estructuras que almacenarán los datos, como CREATE, ALTER y DROP.'
    },
    {
        id: 6,
        type: 'multiple',
        question: '¿Cuáles son las tres sentencias principales de DDL?',
        options: [
            'SELECT, INSERT, UPDATE',
            'CREATE, ALTER, DROP',
            'GRANT, REVOKE, DENY',
            'COMMIT, ROLLBACK, SAVEPOINT'
        ],
        correct: 1,
        explanation: 'Las tres sentencias principales de DDL son: CREATE (crear objetos), ALTER (modificar objetos) y DROP (eliminar objetos). Estas definen las estructuras que almacenarán los datos.'
    },
    {
        id: 7,
        type: 'multiple',
        question: 'La instrucción DROP es irreversible y elimina permanentemente los datos asociados. ¿Verdadero o Falso?',
        options: [
            'Verdadero',
            'Falso'
        ],
        correct: 0,
        explanation: 'Verdadero. DROP elimina objetos de la base de datos de manera IRREVERSIBLE y elimina permanentemente los datos asociados. Por eso es importante tener mucho cuidado al usarla.'
    },
    {
        id: 8,
        type: 'multiple',
        question: '¿Qué instrucción SQL se utiliza para insertar datos en una tabla?',
        options: [
            'ADD',
            'INSERT',
            'CREATE',
            'APPEND'
        ],
        correct: 1,
        explanation: 'INSERT es la instrucción DML (Data Manipulation Language) utilizada para insertar datos en una tabla. Forma parte del grupo: INSERT, UPDATE, DELETE y SELECT.'
    },
    {
        id: 9,
        type: 'truefalse',
        question: 'SELECT también se conoce como DQL (Data Query Language), que significa Lenguaje de Consulta de Datos.',
        correct: true,
        explanation: 'Verdadero. SELECT se conoce como DQL (Data Query Language / Lenguaje de Consulta de Datos). Aunque técnicamente forma parte de DML, tiene su propia categoría porque su función es consultar datos, no modificarlos.'
    },
    {
        id: 10,
        type: 'multiple',
        question: '¿Qué hacen los comandos DCL (Data Control Language)?',
        options: [
            'Crean tablas y vistas',
            'Insertan y actualizan datos',
            'Otorgan y eliminan permisos para administrar el sistema gestor',
            'Confirman o deshacen transacciones'
        ],
        correct: 2,
        explanation: 'DCL (Data Control Language) se utiliza para administrar el sistema gestor de base de datos y controlar el acceso a los objetos. Sus comandos principales son GRANT (otorgar permisos) y REVOKE (eliminar permisos).'
    },
    {
        id: 11,
        type: 'multiple',
        question: '¿Cuáles son los cuatro comandos de TCL (Transaction Control Language)?',
        options: [
            'SELECT, INSERT, UPDATE, DELETE',
            'CREATE, ALTER, DROP, TRUNCATE',
            'COMMIT, ROLLBACK, SAVEPOINT, SET TRANSACTION',
            'GRANT, REVOKE, DENY, ALLOW'
        ],
        correct: 2,
        explanation: 'Los cuatro comandos de TCL son: COMMIT (confirma transacción), ROLLBACK (deshace transacción), SAVEPOINT (punto de guardado) y SET TRANSACTION (inicializa una transacción). Controlan las transacciones en una base de datos.'
    },

    // ============================================
    // SECCIÓN 3: INSTRUCCIÓN INSERT
    // ============================================
    {
        id: 12,
        type: 'multiple',
        question: 'En la anatomía de la sintaxis INSERT, ¿cuál es el "Target" (Destino)?',
        options: [
            'Los valores que se van a insertar',
            'El nombre de la tabla donde se insertarán los datos',
            'La palabra clave INSERT INTO',
            'Las columnas donde se insertarán datos'
        ],
        correct: 1,
        explanation: 'El Target (Destino) es el nombre de la tabla donde se insertarán los datos. La sintaxis completa es: INSERT INTO nombre_tabla (columnas) VALUES (valores).'
    },
    {
        id: 13,
        type: 'multiple',
        question: '¿Qué tipo de columnas NO debes incluir en tu lista de columnas al hacer un INSERT?',
        options: [
            'Columnas de texto',
            'Columnas IDENTITY y columnas CALCULADAS',
            'Columnas numéricas',
            'Columnas de fecha'
        ],
        correct: 1,
        explanation: 'No debes incluir columnas IDENTITY (auto-incrementales) ni columnas CALCULADAS porque el sistema las gestiona automáticamente. Las columnas GENERADAS también se omiten porque son creadas automáticamente por funciones del sistema.'
    },
    {
        id: 14,
        type: 'multiple',
        question: '¿Cuál es la diferencia entre NULL y NOT NULL en una columna?',
        options: [
            'NULL significa texto vacío, NOT NULL significa número cero',
            'NULL es opcional (permite valores vacíos/desconocidos), NOT NULL es obligatorio',
            'No hay diferencia, son lo mismo',
            'NULL solo se usa en fechas, NOT NULL en números'
        ],
        correct: 1,
        explanation: 'NULL es OPCIONAL: permite dejar el espacio vacío (valor desconocido o inexistente). NOT NULL es OBLIGATORIO: no se permite omitir el dato ni enviar valor desconocido, la base rechazará la fila si falta este dato.'
    },
    {
        id: 15,
        type: 'matching',
        question: 'Empareja cada tipo de instrucción SQL con su función principal:',
        pairs: [
            { left: 'DDL', right: 'Definir estructuras de datos (CREATE, ALTER, DROP)' },
            { left: 'DML', right: 'Manipular datos (INSERT, UPDATE, DELETE, SELECT)' },
            { left: 'DCL', right: 'Controlar permisos (GRANT, REVOKE)' },
            { left: 'TCL', right: 'Controlar transacciones (COMMIT, ROLLBACK)' }
        ],
        explanation: 'Cada tipo de instrucción SQL tiene una función específica: DDL define estructuras, DML manipula datos, DCL controla permisos, y TCL gestiona transacciones.'
    },
    {
        id: 16,
        type: 'multiple',
        question: 'En el INSERT basado en consultas (INSERT + SELECT), ¿qué debe coincidir entre las tablas?',
        options: [
            'Solo los nombres de las columnas',
            'Las columnas consultadas deben coincidir con las columnas a insertar en orden y tipo de datos',
            'Solo el número de filas',
            'Los nombres de las tablas'
        ],
        correct: 1,
        explanation: 'En INSERT + SELECT, las columnas consultadas deben coincidir con las columnas a insertar en ORDEN y TIPO DE DATOS. Esto permite poblar una tabla utilizando datos extraídos de otra tabla.'
    },
    {
        id: 17,
        type: 'multiple',
        question: '¿Cuál es el formato correcto para insertar una fecha en SQL?',
        options: [
            'DD/MM/YYYY',
            'MM-DD-YYYY',
            'YYYY-MM-DD',
            'YYYY/DD/MM'
        ],
        correct: 2,
        explanation: 'El formato correcto para fechas en SQL es \'YYYY-MM-DD\' (entre comillas simples). Para texto se usan comillas simples \'Texto\', y para decimales se usa punto 10.5'
    },

    // ============================================
    // SECCIÓN 4: INSTRUCCIONES UPDATE Y DELETE
    // ============================================
    {
        id: 18,
        type: 'multiple',
        question: '¿Qué hace la instrucción UPDATE?',
        options: [
            'Crea nuevos registros en la tabla',
            'Modifica datos existentes, no crea nuevos registros',
            'Elimina registros de la tabla',
            'Crea una nueva tabla'
        ],
        correct: 1,
        explanation: 'UPDATE se utiliza para actualizar/modificar registros EXISTENTES en una tabla. Modifica datos existentes, NO crea nuevos registros. La sintaxis es: UPDATE tabla SET columna = valor WHERE condición.'
    },
    {
        id: 19,
        type: 'multiple',
        question: 'Para actualizar múltiples columnas en una instrucción UPDATE, ¿cómo se separan?',
        options: [
            'Con punto y coma (;)',
            'Con comas (,)',
            'Con AND',
            'Con OR'
        ],
        correct: 1,
        explanation: 'Para actualizar múltiples columnas, se separan por COMAS. Ejemplo: UPDATE Peliculas SET presupuesto = 250000000, calificacion = 8.5 WHERE idPelicula = 101;'
    },
    {
        id: 20,
        type: 'multiple',
        question: '¿Cuál es la diferencia principal entre DELETE y TRUNCATE?',
        options: [
            'No hay diferencia, hacen lo mismo',
            'DELETE es más rápido que TRUNCATE',
            'TRUNCATE es más rápido y no requiere cláusula WHERE, elimina todas las filas sin registrar eliminaciones individuales',
            'TRUNCATE permite recuperar los datos después'
        ],
        correct: 2,
        explanation: 'TRUNCATE elimina todas las filas de una tabla sin registrar las eliminaciones individuales, es MÁS RÁPIDO y utiliza menos recursos del registro de transacciones. Es similar a un DELETE sin cláusula WHERE. DELETE es más lento porque registra cada fila eliminada individualmente y requiere la cláusula WHERE para evitar eliminar todo.'
    },
    {
        id: 21,
        type: 'ordering',
        question: 'Ordena correctamente la secuencia de ejecución REAL de una consulta SQL:',
        items: [
            { id: 1, text: 'FROM (Trae datos/tarjetas)', order: 1 },
            { id: 2, text: 'WHERE (Filtra tarjetas)', order: 2 },
            { id: 3, text: 'GROUP BY (Arma las mesas)', order: 3 },
            { id: 4, text: 'HAVING (Filtra las mesas)', order: 4 },
            { id: 5, text: 'SELECT (Muestra el resultado)', order: 5 },
            { id: 6, text: 'ORDER BY (Ordena la presentación)', order: 6 }
        ],
        explanation: 'El orden REAL de ejecución es: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY. Este es diferente al orden en que se escribe la consulta.'
    },

    // ============================================
    // SECCIÓN 5: LA SINTAXIS MAESTRA (SELECT)
    // ============================================
    {
        id: 22,
        type: 'multiple',
        question: '¿Cuál es el orden lógico CORRECTO de construcción de una consulta SELECT según la "Sintaxis Maestra"?',
        options: [
            'SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY',
            'FROM → WHERE → SELECT → ORDER BY',
            'SELECT → WHERE → FROM → ORDER BY',
            'WHERE → FROM → SELECT → GROUP BY'
        ],
        correct: 0,
        explanation: 'El orden lógico de escritura es: (1) SELECT, (2) lista_columnas, (3) FROM, (4) nombre_tabla, (5) WHERE, (6) condición, (7) ORDER BY, (8) columna [ASC | DESC]. El motor de base de datos requiere esta secuencia exacta.'
    },
    {
        id: 23,
        type: 'multiple',
        question: '¿Qué hace la instrucción TOP n PERCENT?',
        options: [
            'Devuelve las primeras n filas',
            'Devuelve un porcentaje del total de filas del conjunto de resultados',
            'Ordena las filas por porcentaje',
            'Calcula el porcentaje de cada fila'
        ],
        correct: 1,
        explanation: 'TOP n PERCENT devuelve un porcentaje del total de filas en lugar de un número fijo. Ejemplo: SELECT TOP 20 PERCENT * FROM Peliculas devuelve el 20% de las filas.'
    },
    {
        id: 24,
        type: 'multiple',
        question: '¿Qué hace WITH TIES cuando se usa con TOP?',
        options: [
            'Elimina duplicados',
            'Incluye filas adicionales que empatan en valor con la última fila del límite establecido',
            'Ordena las filas alfabéticamente',
            'Limita los resultados a un número exacto'
        ],
        correct: 1,
        explanation: 'WITH TIES incluye filas adicionales que empatan en valor con la última fila del límite establecido, garantizando equidad estadística. Ejemplo: si la 5ta y 6ta fila tienen el mismo valor en ORDER BY, incluye ambas aunque pediste TOP 5.'
    },

    // ============================================
    // SECCIÓN 6: FILTRACIONES Y AGRUPACIONES
    // ============================================
    {
        id: 25,
        type: 'multiple',
        question: 'Cuando usas GROUP BY, ¿qué puedes incluir en el SELECT?',
        options: [
            'Cualquier columna de la tabla',
            'Solo la columna usada en GROUP BY y resultados agregados (SUM, COUNT, etc.)',
            'Solo columnas numéricas',
            'Todas las columnas excepto fechas'
        ],
        correct: 1,
        explanation: 'La REGLA CRÍTICA del SELECT con GROUP BY: Solo puedes poner (1) La Etiqueta del Grupo (columna usada en GROUP BY) y (2) El Resultado Agregado (SUM, COUNT, etc.). No puedes mostrar detalles individuales de columnas que no están agregadas.'
    },
    {
        id: 26,
        type: 'multiple',
        question: '¿Por qué NO puedes usar SUM dentro de WHERE?',
        options: [
            'Porque WHERE es solo para texto',
            'Porque WHERE filtra tarjetas/filas individuales, no resultados calculados/agregados',
            'Porque SUM es muy lento',
            'Porque WHERE solo acepta números'
        ],
        correct: 1,
        explanation: 'Es IMPOSIBLE usar SUM dentro de WHERE porque el WHERE filtra tarjetas (filas individuales) antes de agrupar, no resultados calculados. Para filtrar resultados agregados, debes usar HAVING después de GROUP BY.'
    },
    {
        id: 27,
        type: 'multiple',
        question: 'GROUP BY ordena automáticamente los resultados. ¿Verdadero o Falso?',
        options: [
            'Verdadero',
            'Falso'
        ],
        correct: 1,
        explanation: 'Falso. GROUP BY NO ordena automáticamente los resultados. Es un MITO creer que GROUP BY ordena. Si necesitas ordenar, debes usar ORDER BY explícitamente.'
    },
    {
        id: 28,
        type: 'multiple',
        question: '¿Cuál es la diferencia entre COUNT(*) y COUNT(columna)?',
        options: [
            'No hay diferencia',
            'COUNT(*) cuenta filas, COUNT(columna) cuenta valores no nulos en esa columna',
            'COUNT(*) es más lento',
            'COUNT(columna) cuenta solo números'
        ],
        correct: 1,
        explanation: 'COUNT(*) cuenta todas las filas (incluyendo las que tienen NULL). COUNT(columna) cuenta solo los valores NO NULOS en esa columna específica. Es importante no confundirlos.'
    },
    {
        id: 29,
        type: 'fill',
        question: 'El "Algoritmo Mental" sugiere hacer 5 preguntas antes de escribir código. La primera pregunta es: ¿Qué ____ necesito?',
        correctAnswers: ['tarjetas', 'filas', 'registros'],
        explanation: 'El Algoritmo Mental tiene 5 preguntas: (1) ¿Qué TARJETAS necesito? → Define WHERE, (2) ¿Cómo AGRUPO las tarjetas? → Define GROUP BY, (3) ¿Qué CÁLCULO hago por mesa? → Define SUM/COUNT/AVG, (4) ¿ELIMINO alguna mesa? → Define HAVING, (5) ¿Qué MUESTRO y ordeno? → Define SELECT/ORDER BY.'
    },

    // ============================================
    // SECCIÓN 7: ORDEN DE EJECUCIÓN DE SQL
    // ============================================
    {
        id: 30,
        type: 'multiple',
        question: 'SQL NO se ejecuta en el orden en que se escribe. ¿Cuál es el orden REAL de ejecución?',
        options: [
            'SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY',
            'FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY',
            'WHERE → FROM → SELECT → GROUP BY → ORDER BY',
            'SELECT → WHERE → FROM → ORDER BY'
        ],
        correct: 1,
        explanation: 'El orden REAL de ejecución es: (1) FROM (trae datos/tarjetas), (2) WHERE (filtra tarjetas), (3) GROUP BY (arma las mesas), (4) HAVING (filtra las mesas), (5) SELECT (muestra el resultado final), (6) ORDER BY (ordena la presentación).'
    },
    {
        id: 31,
        type: 'multiple',
        question: 'En la analogía de "Tarjetas y Mesas", ¿qué representa WHERE?',
        options: [
            'Crea mesas con etiquetas',
            'Filtra tarjetas individuales (filas) antes de agrupar',
            'Filtra mesas completas (grupos) después de agregar',
            'Muestra el resultado final'
        ],
        correct: 1,
        explanation: 'WHERE filtra TARJETAS (filas individuales) antes de agrupar. Ejemplo: "Quiero solo ventas mayores a $50". Usa WHERE para filtrar registros individuales.'
    },
    {
        id: 32,
        type: 'multiple',
        question: 'En la analogía de "Tarjetas y Mesas", ¿qué representa HAVING?',
        options: [
            'Filtra tarjetas individuales antes de agrupar',
            'Crea las mesas con etiquetas',
            'Filtra MESAS (grupos completos) después de agregar',
            'Ordena los resultados'
        ],
        correct: 2,
        explanation: 'HAVING filtra MESAS (grupos completos) después de agregar. Ejemplo: "Quiero solo clientes (mesas) que hayan comprado más de $150 en total". Usa HAVING para filtrar resultados agregados.'
    },
    {
        id: 33,
        type: 'multiple',
        question: '¿En qué parte del "Pipeline de Datos" (El Embudo) se eliminan las mesas completas/grupos?',
        options: [
            'En WHERE',
            'En GROUP BY',
            'En HAVING',
            'En SELECT'
        ],
        correct: 2,
        explanation: 'El Pipeline de Datos funciona así: Dataset Completo → WHERE (Elimina tarjetas/filas) → GROUP BY (Organiza en mesas/grupos) → HAVING (Elimina mesas completas/grupos) → SELECT (Resultado Final). HAVING filtra después de agrupar.'
    },

    // ============================================
    // SECCIÓN 8: FUNCIONES AGREGADAS
    // ============================================
    {
        id: 34,
        type: 'multiple',
        question: '¿Cuáles son las funciones agregadas principales mencionadas en el curso?',
        options: [
            'CONCAT, SUBSTRING, LENGTH',
            'SUM, COUNT, AVG, MAX, MIN',
            'INSERT, UPDATE, DELETE',
            'CREATE, ALTER, DROP'
        ],
        correct: 1,
        explanation: 'Las funciones agregadas principales son: SUM() (suma), COUNT() (cuenta), AVG() (promedio), MAX() (máximo) y MIN() (mínimo). Estas funciones reducen múltiples filas (muchas tarjetas) a un solo valor por grupo.'
    },
    {
        id: 35,
        type: 'multiple',
        question: 'Las funciones agregadas trabajan dentro de cada mesa/grupo. ¿Verdadero o Falso?',
        options: [
            'Verdadero',
            'Falso'
        ],
        correct: 0,
        explanation: 'Verdadero. Las funciones agregadas trabajan DENTRO de cada mesa/grupo. Si tienes GROUP BY Cliente, SUM(Monto) calculará la suma por cada cliente (por cada mesa). Las funciones reducen múltiples filas a un solo valor por grupo.'
    },

    // ============================================
    // SECCIÓN 9: PLANTILLA UNIVERSAL Y FILOSOFÍA
    // ============================================
    {
        id: 36,
        type: 'multiple',
        question: 'Según el curso, ¿cuál es la "Filosofía" detrás de SQL?',
        options: [
            'Solo memorizar sintaxis',
            'SQL es transformación lógica, no solo sintaxis',
            'SQL es solo para programadores avanzados',
            'SQL no requiere pensar, solo escribir código'
        ],
        correct: 1,
        explanation: 'La Filosofía es que SQL es transformación LÓGICA, no solo sintaxis. Debes distinguir siempre entre Tarjetas (Rows/Filas) y Mesas (Groups/Grupos), respetar el orden lógico de ejecución, y aplicar el Algoritmo Mental antes de escribir.'
    },
    {
        id: 37,
        type: 'fill',
        question: 'La "Plantilla Universal de consulta" es rígida. El motor de base de datos requiere este orden exacto. Complete la plantilla: SELECT → FROM → ____ → GROUP BY → ____ → ORDER BY',
        correctAnswers: ['WHERE, HAVING', 'where, having'],
        explanation: 'La Plantilla Universal es: SELECT [Columnas/Cálculos] → FROM [Tabla] → WHERE [Filtro de Filas/Tarjetas] → GROUP BY [Columna de Agrupación] → HAVING [Filtro de Grupos/Mesas] → ORDER BY [Criterio de Ordenamiento]. Esta estructura es RÍGIDA.'
    },

    // ============================================
    // SECCIÓN 10: UNIONES (JOINs)
    // ============================================
    {
        id: 38,
        type: 'multiple',
        question: '¿Qué devuelve un INNER JOIN?',
        options: [
            'Todos los registros de ambas tablas',
            'Solo los registros que coinciden en ambas tablas (intersección)',
            'Todos los registros de la tabla izquierda',
            'Todos los registros de la tabla derecha'
        ],
        correct: 1,
        explanation: 'INNER JOIN devuelve solo las COINCIDENCIAS exactas en ambas tablas (A∩B). Solo muestra los registros donde existe un "match" entre las tablas según la condición ON.'
    },
    {
        id: 39,
        type: 'multiple',
        question: '¿Qué devuelve un LEFT JOIN?',
        options: [
            'Solo coincidencias',
            'Todo de la derecha + coincidencias',
            'Todo de la izquierda + coincidencias (rellena con NULL si no hay match)',
            'Todo de ambas tablas'
        ],
        correct: 2,
        explanation: 'LEFT JOIN devuelve TODO de la izquierda + coincidencias. Si no hay coincidencia en la tabla derecha, el sistema rellena con NULL. Trae TODO lo de la tabla izquierda y solo lo que coincida de la derecha.'
    },
    {
        id: 40,
        type: 'multiple',
        question: '¿Qué devuelve un FULL JOIN?',
        options: [
            'Solo coincidencias',
            'Todo de la izquierda',
            'Todo de la derecha',
            'Todo de ambos lados (Universo completo)'
        ],
        correct: 3,
        explanation: 'FULL JOIN devuelve TODO de ambos lados (Universo completo). Combina todos los registros de ambas tablas, rellenando con NULL donde no hay coincidencias.'
    },
    {
        id: 41,
        type: 'multiple',
        question: '¿Qué pasa si haces un JOIN sin la cláusula ON?',
        options: [
            'No pasa nada',
            'Provoca un producto cartesiano (multiplicación masiva de filas sin sentido)',
            'El motor lo arregla automáticamente',
            'Solo muestra las primeras 10 filas'
        ],
        correct: 1,
        explanation: 'Sin la cláusula ON, se produce un PRODUCTO CARTESIANO: una multiplicación masiva de filas sin sentido. Es un error intencional muy grave. Ejemplo: SELECT * FROM estudiantes, carreras; (SIN condición de unión).'
    },
    {
        id: 42,
        type: 'fill',
        question: 'En la sintaxis de INNER JOIN, la parte que establece la relación lógica entre las tablas es la cláusula ____.',
        correctAnswers: ['ON', 'on'],
        explanation: 'La cláusula ON establece la relación lógica entre las tablas. Ejemplo: INNER JOIN carreras c ON e.id_carrera = c.id_carrera. Sin ON, se produce un producto cartesiano.'
    },

    // ============================================
    // SECCIÓN 11: SUBCONSULTAS
    // ============================================
    {
        id: 43,
        type: 'multiple',
        question: '¿Cuál es la diferencia central entre JOIN y Subconsulta?',
        options: [
            'No hay diferencia',
            'JOIN combina datos, Subconsulta pregunta algo antes',
            'Subconsulta es más rápida que JOIN',
            'JOIN solo funciona con dos tablas'
        ],
        correct: 1,
        explanation: 'La diferencia central es: mientras el JOIN COMBINA datos de múltiples tablas, la Subconsulta PREGUNTA algo antes (es una pregunta secundaria incrustada dentro de la pregunta principal).'
    },
    {
        id: 44,
        type: 'multiple',
        question: '¿Cuántos tipos de subconsultas se mencionaron en el curso?',
        options: [
            'Uno',
            'Dos',
            'Tres: Escalar, Lista y EXISTS',
            'Cuatro'
        ],
        correct: 2,
        explanation: 'Hay tres tipos de subconsultas: (1) ESCALAR - devuelve un valor único (ej: WHERE salario > (Promedio)), (2) LISTA - devuelve una columna de valores (ej: WHERE id IN (Lista de IDs)), (3) EXISTS - verificación booleana True/False (ej: WHERE EXISTS (SELECT 1...)).'
    },
    {
        id: 45,
        type: 'multiple',
        question: '¿Cuándo deberías usar JOIN vs Subconsulta?',
        options: [
            'Siempre usar JOIN, nunca subconsulta',
            'JOIN si necesitas columnas de ambas tablas, Subconsulta si necesitas calcular una condición antes',
            'Siempre usar subconsulta, nunca JOIN',
            'Da igual, son exactamente lo mismo'
        ],
        correct: 1,
        explanation: 'Usa JOIN si necesitas mostrar columnas de ambas tablas. Usa SUBCONSULTA si necesitas calcular una condición antes de mostrar datos (más intuitivo para lógica secuencial). JOIN generalmente es más rápido, pero subconsultas son más claras para cierta lógica.'
    },
    {
        id: 46,
        type: 'multiple',
        question: 'Para verificar si existe algún registro que cumpla una condición, ¿qué tipo de subconsulta usarías?',
        options: [
            'Escalar',
            'Lista',
            'EXISTS',
            'HAVING'
        ],
        correct: 2,
        explanation: 'Para verificar existencia, usa EXISTS. Ejemplo: WHERE EXISTS (SELECT 1 FROM tabla WHERE condición). Devuelve True/False (verificación booleana).'
    },
    {
        id: 47,
        type: 'multiple',
        question: 'Para detectar registros faltantes (que existen en una tabla pero no en otra), ¿qué técnica usarías?',
        options: [
            'INNER JOIN',
            'RIGHT JOIN',
            'LEFT JOIN + NULL (verificando que el campo de la tabla derecha sea NULL)',
            'FULL JOIN'
        ],
        correct: 2,
        explanation: 'Para detectar faltantes, usa LEFT JOIN + NULL. Traes todo de la tabla izquierda y buscas registros donde la tabla derecha devuelva NULL (significa que no existe en la tabla derecha).'
    },

    // ============================================
    // SECCIÓN 12: ERRORES COMUNES
    // ============================================
    {
        id: 48,
        type: 'multiple',
        question: '¿Cuál de los siguientes es un error común al usar JOINs?',
        options: [
            'Usar demasiadas columnas en SELECT',
            'JOIN Innecesarios - unir tablas que no se utilizan en el SELECT ni en el filtro',
            'Usar WHERE antes de FROM',
            'Usar ORDER BY'
        ],
        correct: 1,
        explanation: 'JOIN Innecesarios es un error común: unir tablas que no se utilizan en el SELECT ni en el filtro causa costo de rendimiento. Otros errores: Falta de condición ON (producto cartesiano), Columnas Ambiguas (usar alias como e.id), y Correlación Mal Diseñada (subconsultas por cada fila).'
    },
    {
        id: 49,
        type: 'multiple',
        question: '¿Qué error provoca el mensaje "Ambiguous column name"?',
        options: [
            'Falta de condición ON',
            'Nombre de columna ambiguo porque existe en ambas tablas y no se especificó con alias',
            'Usar GROUP BY incorrectamente',
            'Falta de WHERE'
        ],
        correct: 1,
        explanation: 'El error "Ambiguous column name" ocurre cuando una columna existe en ambas tablas y no se especifica de cuál tabla proviene. Solución: usar ALIAS como e.id o c.id.'
    },
    {
        id: 50,
        type: 'multiple',
        question: '¿Cuál de estos NO es un error común mencionado en el curso?',
        options: [
            'SUM dentro de WHERE',
            'Columnas Huérfanas en SELECT con GROUP BY',
            'Mito del Orden (creer que GROUP BY ordena)',
            'Usar demasiados comentarios en el código'
        ],
        correct: 3,
        explanation: 'Los errores comunes mencionados son: (1) SUM dentro de WHERE - imposible porque WHERE filtra tarjetas, no resultados, (2) Columnas Huérfanas - incluir columnas en SELECT que no están en GROUP BY ni son agregaciones, (3) Mito del Orden - creer que GROUP BY ordena los resultados, (4) Confusión de Conteo - confundir COUNT(*) con COUNT(columna).'
    },

    // ============================================
    // SECCIÓN 13: CHECKLIST MENTAL Y MEJORES PRÁCTICAS
    // ============================================
    {
        id: 51,
        type: 'multiple',
        question: 'Según el "Checklist Mental", antes de escribir SELECT, ¿qué debes preguntarte PRIMERO?',
        options: [
            '¿Cuántas columnas voy a mostrar?',
            '¿Qué relación estoy modelando? (1:1, 1:N, N:N)',
            '¿Cuánto tiempo tomará la consulta?',
            '¿Qué color tiene la tabla?'
        ],
        correct: 1,
        explanation: 'El Checklist Mental tiene 3 preguntas clave antes de escribir SELECT: (1) ¿Qué relación estoy modelando? (1:1, 1:N, N:N), (2) ¿Necesito columnas externas o solo una condición? (Decisión: JOIN vs Subconsulta), (3) ¿Estoy pensando en filas o en conjuntos? (Operación individual vs masiva).'
    },
    {
        id: 52,
        type: 'multiple',
        question: '¿Qué significa "Un JOIN no es solo una unión; es un FILTRO de combinaciones válidas"?',
        options: [
            'JOIN solo muestra las primeras filas',
            'JOIN construye una vista temporal basada en un "match", no une físicamente las tablas',
            'JOIN elimina filas duplicadas',
            'JOIN ordena los resultados automáticamente'
        ],
        correct: 1,
        explanation: 'JOIN no une tablas físicamente; construye una vista temporal basada en un "match" según la condición ON. Es un FILTRO que selecciona solo las combinaciones válidas que cumplen la condición de unión.'
    },

    // ============================================
    // SECCIÓN 14: CASOS PRÁCTICOS Y EJEMPLOS
    // ============================================
    {
        id: 53,
        type: 'multiple',
        question: 'Si quieres encontrar estudiantes cuya nota sea mayor al promedio de todos los estudiantes, ¿qué usarías?',
        options: [
            'Un JOIN con la tabla de notas',
            'Una subconsulta escalar: WHERE nota > (SELECT AVG(nota) FROM estudiantes)',
            'Solo GROUP BY',
            'HAVING con COUNT'
        ],
        correct: 1,
        explanation: 'Usarías una SUBCONSULTA ESCALAR que devuelve un solo valor (el promedio): SELECT nombre FROM estudiantes WHERE nota > (SELECT AVG(nota) FROM estudiantes); La subconsulta calcula el promedio primero, luego WHERE filtra.'
    },
    {
        id: 54,
        type: 'multiple',
        question: 'Si necesitas mostrar el nombre del estudiante Y el nombre de su carrera, ¿qué técnica usarías?',
        options: [
            'Una subconsulta',
            'Solo GROUP BY',
            'Un INNER JOIN porque necesitas columnas de ambas tablas',
            'Solo WHERE'
        ],
        correct: 2,
        explanation: 'Usarías INNER JOIN porque necesitas mostrar columnas de AMBAS tablas (estudiantes y carreras). Ejemplo: SELECT e.nombre, c.nombre_carrera FROM estudiantes e INNER JOIN carreras c ON e.id_carrera = c.id_carrera;'
    },
    {
        id: 55,
        type: 'multiple',
        question: 'Tienes una consulta: SELECT Cliente, SUM(Monto) FROM Ventas WHERE Fecha_Transaccion > \'2024-01-01\'. ¿Cuál es el error?',
        options: [
            'No hay error',
            'Falta GROUP BY Cliente (Columna Huérfana)',
            'WHERE está mal escrito',
            'SUM no existe'
        ],
        correct: 1,
        explanation: 'El error es Columna Huérfana: Cliente está en SELECT pero no en GROUP BY ni es una agregación. La consulta correcta sería: SELECT Cliente, SUM(Monto) FROM Ventas WHERE Fecha_Transaccion > \'2024-01-01\' GROUP BY Cliente;'
    },

    // ============================================
    // SECCIÓN 15: CONCEPTOS AVANZADOS
    // ============================================
    {
        id: 56,
        type: 'multiple',
        question: '¿Qué ventaja tiene usar alias de tabla en una consulta con JOIN?',
        options: [
            'Hace la consulta más lenta',
            'Hace el código más corto y legible, y evita ambigüedad en nombres de columnas',
            'No tiene ninguna ventaja',
            'Solo funciona en subconsultas'
        ],
        correct: 1,
        explanation: 'Los alias (como "e" para estudiantes, "c" para carreras) hacen el código más corto y legible. También evitan ambigüedad: en lugar de estudiantes.nombre y carreras.nombre, usas e.nombre y c.nombre.'
    },
    {
        id: 57,
        type: 'fill',
        question: 'Si una subconsulta se ejecuta por cada fila de la consulta externa y causa problemas de rendimiento, se llama subconsulta ____ mal diseñada.',
        correctAnswers: ['correlacionada', 'correlativa'],
        explanation: 'Una subconsulta CORRELACIONADA mal diseñada se ejecuta por cada fila sin necesidad, causando problemas de rendimiento. Debe diseñarse cuidadosamente para que solo se ejecute cuando sea absolutamente necesario.'
    },
    {
        id: 58,
        type: 'multiple',
        question: 'Para encontrar clientes que NO han realizado ninguna compra, ¿qué técnica es más apropiada?',
        options: [
            'INNER JOIN',
            'RIGHT JOIN',
            'LEFT JOIN + WHERE columna_derecha IS NULL',
            'FULL JOIN'
        ],
        correct: 2,
        explanation: 'Usa LEFT JOIN + WHERE columna_derecha IS NULL para encontrar registros que existen en la tabla izquierda (clientes) pero NO en la tabla derecha (compras). Ejemplo: SELECT c.* FROM clientes c LEFT JOIN compras co ON c.id = co.id_cliente WHERE co.id_cliente IS NULL;'
    },

    // ============================================
    // SECCIÓN 16: PREGUNTAS DE SINTAXIS Y CÓDIGO
    // ============================================
    {
        id: 59,
        type: 'multiple',
        question: '¿Cuál de estas consultas está escrita CORRECTAMENTE?',
        options: [
            'SELECT nombre FROM estudiantes GROUP BY nombre HAVING AVG(nota) > 8',
            'SELECT nombre, nota FROM estudiantes GROUP BY nombre',
            'SELECT AVG(nota) FROM estudiantes WHERE AVG(nota) > 8',
            'GROUP BY nombre SELECT nombre FROM estudiantes'
        ],
        correct: 0,
        explanation: 'La opción A es correcta: SELECT nombre FROM estudiantes GROUP BY nombre HAVING AVG(nota) > 8. Opción B tiene columna huérfana (nota no está en GROUP BY ni es agregación). Opción C usa agregación en WHERE (debe ser HAVING). Opción D tiene orden incorrecto.'
    },
    {
        id: 60,
        type: 'fill',
        question: 'Para ordenar los resultados de mayor a menor, se usa ORDER BY columna ____.',
        correctAnswers: ['DESC', 'desc'],
        explanation: 'Para ordenar de mayor a menor (descendente), se usa DESC. Para ordenar de menor a mayor (ascendente, el predeterminado), se usa ASC o simplemente se omite.'
    },
    {
        id: 61,
        type: 'multiple',
        question: '¿Cuál es la sintaxis correcta para crear una tabla llamada "Estudiantes" con una columna id autoincremental?',
        options: [
            'CREATE TABLE Estudiantes (id INT AUTO_INCREMENT PRIMARY KEY);',
            'CREATE TABLE Estudiantes (id INT IDENTITY(1,1) PRIMARY KEY);',
            'CREATE TABLE Estudiantes (id INT GENERATED);',
            'Depende del sistema de base de datos'
        ],
        correct: 3,
        explanation: 'Depende del sistema: En SQL Server se usa IDENTITY(1,1), en MySQL se usa AUTO_INCREMENT, en PostgreSQL se usa SERIAL. La sintaxis varía según el motor de base de datos.'
    },

    // ============================================
    // SECCIÓN 17: PREGUNTAS DE COMPRENSIÓN PROFUNDA
    // ============================================
    {
        id: 62,
        type: 'multiple',
        question: '¿Por qué se dice que "SQL es transformación lógica, no solo sintaxis"?',
        options: [
            'Porque SQL es difícil de aprender',
            'Porque debes entender cómo piensan las bases de datos: filtrar, agrupar, calcular en secuencia lógica',
            'Porque SQL cambia constantemente',
            'Porque SQL no tiene reglas'
        ],
        correct: 1,
        explanation: 'SQL es transformación lógica porque debes entender CÓMO y CUÁNDO la base de datos filtra (WHERE vs HAVING), agrupa (GROUP BY), y calcula (funciones agregadas). No es solo memorizar sintaxis, es entender el proceso mental y la secuencia de ejecución.'
    },
    {
        id: 63,
        type: 'multiple',
        question: 'En la analogía de tarjetas y mesas, si agrupas por Cliente, ¿qué representa cada "mesa"?',
        options: [
            'Una fila de la tabla',
            'Un grupo de filas que comparten el mismo cliente',
            'Todas las filas de la tabla',
            'Solo los clientes con compras'
        ],
        correct: 1,
        explanation: 'Cada "mesa" representa un GRUPO de filas que comparten el mismo valor en la columna de agrupación. Si agrupas por Cliente, la "Mesa Ana" contiene todas las filas de Ana, la "Mesa Luis" todas las de Luis, etc. GROUP BY organiza las tarjetas (filas) en mesas (grupos).'
    },
    {
        id: 64,
        type: 'multiple',
        question: '¿Por qué es importante aplicar el "Algoritmo Mental" ANTES de escribir código SQL?',
        options: [
            'Para hacer el código más largo',
            'Para perder tiempo',
            'Para pensar lógicamente qué datos necesitas, cómo filtrarlos, cómo agruparlos y qué calcular',
            'No es importante'
        ],
        correct: 2,
        explanation: 'El Algoritmo Mental es importante porque te fuerza a pensar LÓGICAMENTE antes de escribir código: ¿Qué tarjetas/filas necesito? ¿Cómo las agrupo? ¿Qué cálculos hago? ¿Qué mesas/grupos elimino? ¿Qué muestro al final? Esto evita errores y código innecesario.'
    },

    // ============================================
    // SECCIÓN 18: VENTAJAS Y DESVENTAJAS
    // ============================================
    {
        id: 65,
        type: 'multiple',
        question: '¿Cuál de estas es una VENTAJA de las bases de datos relacionales mencionada en el curso?',
        options: [
            'Escalabilidad limitada',
            'Estructura clara y definida con integridad de datos',
            'Rendimiento bajo en cargas masivas',
            'Cambios de esquema muy flexibles'
        ],
        correct: 1,
        explanation: 'Las ventajas de bases de datos relacionales incluyen: Estructura clara y definida, Consistencia e integridad de datos, Soporte maduro y establecido, Capacidad de consulta avanzada, y Transacciones (garantizan integridad).'
    },
    {
        id: 66,
        type: 'multiple',
        question: '¿Cuál de estas es una DESVENTAJA de las bases de datos relacionales?',
        options: [
            'Estructura clara',
            'Escalabilidad limitada en algunos casos y rendimiento bajo con cargas masivas',
            'Capacidad de consulta avanzada',
            'Soporte maduro'
        ],
        correct: 1,
        explanation: 'Las desventajas incluyen: Escalabilidad limitada en algunos casos, Cambios de esquema y flexibilidad reducida, Costos y licencias, Rendimiento bajo con cargas masivas, y Complejidad en la gestión y mantenimiento.'
    },

    // ============================================
    // SECCIÓN 19: PREGUNTAS ADICIONALES DE REPASO
    // ============================================
    {
        id: 67,
        type: 'multiple',
        question: 'SEQUEL fue el nombre original de SQL. ¿Quiénes lo crearon y cuándo?',
        options: [
            'Microsoft en 1990',
            'Donald D. Chamberlin y Raymond F. Boyce en IBM, San José - California',
            'Oracle en 1985',
            'Google en 2000'
        ],
        correct: 1,
        explanation: 'SQL originalmente se llamaba SEQUEL (Structured English Query Language). Fue creado por Donald D. Chamberlin y Raymond F. Boyce en IBM, San José - California, como parte del proyecto System R.'
    },
    {
        id: 68,
        type: 'multiple',
        question: '¿Qué representa el estándar SQL-86 en la historia de SQL?',
        options: [
            'La primera base de datos relacional',
            'El año en que ANSI e ISO adoptaron SQL como estándar',
            'La versión de MySQL',
            'Un tipo de JOIN'
        ],
        correct: 1,
        explanation: 'SQL-86 representa el año 1986, cuando ANSI (American National Standards Institute) e ISO (International Organization for Standardization) adoptaron SQL como estándar oficial para bases de datos relacionales.'
    },
    {
        id: 69,
        type: 'fill',
        question: 'Las bases de datos NoSQL NO son estructuradas, es decir, no tienen una estructura bien definida. Los tipos incluyen: Key-Value, Column Store, ____ y Document.',
        correctAnswers: ['Graph', 'graph', 'Grafo', 'grafo'],
        explanation: 'Los tipos de bases de datos NoSQL incluyen: Key-Value (clave-valor), Column Store (almacén de columnas), Graph (grafo - para relaciones complejas), y Document (documento - como MongoDB).'
    },
    {
        id: 70,
        type: 'multiple',
        question: '¿Cuál es la relación lógica en esta consulta: SELECT e.nombre FROM estudiantes e INNER JOIN carreras c ON e.id_carrera = c.id_carrera?',
        options: [
            'e.nombre = c.nombre',
            'e.id_carrera = c.id_carrera',
            'e.id = c.id',
            'No hay relación lógica'
        ],
        correct: 1,
        explanation: 'La relación lógica es e.id_carrera = c.id_carrera. Esta es la condición ON que une ambas tablas, conectando el id_carrera del estudiante con el id_carrera de la tabla carreras.'
    },

    // ============================================
    // SECCIÓN 20: PREGUNTAS DE APLICACIÓN PRÁCTICA
    // ============================================
    {
        id: 71,
        type: 'multiple',
        question: 'Necesitas mostrar los clientes que han comprado MÁS de $150 en total. ¿Cuál consulta es correcta?',
        options: [
            'SELECT Cliente, SUM(Monto) FROM Ventas WHERE SUM(Monto) > 150 GROUP BY Cliente',
            'SELECT Cliente, SUM(Monto) FROM Ventas GROUP BY Cliente HAVING SUM(Monto) > 150',
            'SELECT Cliente FROM Ventas WHERE Monto > 150',
            'SELECT Cliente, SUM(Monto) FROM Ventas HAVING SUM(Monto) > 150'
        ],
        correct: 1,
        explanation: 'La correcta es B: SELECT Cliente, SUM(Monto) FROM Ventas GROUP BY Cliente HAVING SUM(Monto) > 150. Usas HAVING porque filtras un resultado AGREGADO (la suma por cliente), no filas individuales. WHERE filtra antes de agrupar, HAVING filtra después de agrupar.'
    },
    {
        id: 72,
        type: 'multiple',
        question: 'Necesitas encontrar productos que NO han sido vendidos. Tienes tabla Productos (id, nombre) y Ventas (id_producto, cantidad). ¿Qué consulta usarías?',
        options: [
            'SELECT p.* FROM Productos p INNER JOIN Ventas v ON p.id = v.id_producto',
            'SELECT p.* FROM Productos p LEFT JOIN Ventas v ON p.id = v.id_producto WHERE v.id_producto IS NULL',
            'SELECT * FROM Productos WHERE id NOT IN Ventas',
            'SELECT p.* FROM Productos p RIGHT JOIN Ventas v ON p.id = v.id_producto'
        ],
        correct: 1,
        explanation: 'La correcta es B: LEFT JOIN + WHERE columna_derecha IS NULL. Traes TODOS los productos (izquierda) y buscas dónde NO hay ventas (derecha = NULL). Esto identifica productos sin ventas.'
    },
    {
        id: 73,
        type: 'fill',
        question: 'Para insertar el texto "O\'Brien" (con comilla simple) en SQL, debes escapar la comilla escribiendo dos comillas simples: \'O\'\'____\'',
        correctAnswers: ['Brien', 'brien'],
        explanation: 'Para insertar comillas simples dentro de un texto en SQL, debes duplicar la comilla: \'O\'\'Brien\'. El motor interpreta \'\' como una comilla simple literal dentro del texto.'
    },
    {
        id: 74,
        type: 'multiple',
        question: 'Tienes esta consulta: SELECT TOP 5 WITH TIES * FROM Peliculas ORDER BY Calificacion DESC. Si la 5ta y 6ta película tienen calificación 8.5, ¿cuántas películas devuelve?',
        options: [
            'Exactamente 5',
            '6 o más (incluye todos los empates)',
            'Solo la primera película',
            'Todas las películas'
        ],
        correct: 1,
        explanation: 'WITH TIES incluye TODOS los registros que empatan con el último del límite. Si la 5ta y 6ta (y quizás más) tienen la misma calificación 8.5, devolverá 6 o más películas para garantizar equidad estadística.'
    },
    {
        id: 75,
        type: 'multiple',
        question: '¿Qué hace esta consulta? SELECT Cliente, COUNT(*) FROM Ventas GROUP BY Cliente HAVING COUNT(*) >= 3',
        options: [
            'Cuenta todas las ventas',
            'Muestra clientes que han realizado 3 o más compras',
            'Muestra las primeras 3 ventas',
            'Elimina clientes con menos de 3 compras'
        ],
        correct: 1,
        explanation: 'Esta consulta muestra los clientes que han realizado 3 o más compras. GROUP BY Cliente agrupa por cliente, COUNT(*) cuenta las compras por cliente, y HAVING COUNT(*) >= 3 filtra solo los que tienen 3+ compras.'
    }
];

// Exportar las preguntas
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questionsBank;
}
