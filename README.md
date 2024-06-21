# FSON 102

# Module-02

<details>
  <summary>Заняття 1</summary>
<ul>
    <li>Обробка подій</li>
    <ul>
        <li>Посилання на ф-ю</li>
        <li>Анонімний колбек</li>
        <li>Обʼєкт події</li>
    </ul>
    <li>Стан компонента</li>
    <ul>
        <li>Рективність</li>
        <li>useState</li>
        <li>Асинхронність оновлення стану</li>
        <li>Ізоляція стану</li>
        <li>Підняття стану</li>
        <li>Декілька станів</li>
        <li>Оновлення обʼєктів</li>
    </ul>
</ul>
</details>

<details>
  <summary>Заняття 2</summary>
<ul>
    <li>Життєвий цикл компонента</li>
    <ul>
        <li>Монтування</li>
        <li>Оновлення</li>
        <li>Розмонтування</li>
    </ul>
    <li>Хук <code>useEffect</code></li>
    <ul>
        <li>Монтування та суворий режим</li>
        <li>Розмонування та очищення ефекту</li>
        <li>Оновлення</li>
        <li>Декілька ефектів</li>
    </ul>
    <li>Робота з <code>localeStorage</code></li>
    <ul>
        <li>Запис</li>
        <li>Читання через <code>useState(callback)</code></li>
    </ul>
</ul>
</details>
<br/>
<br/>

# Module-03

<details>
  <summary>Заняття 1</summary>
<ul>
    <li>Форми</li>
    <ul>
        <li>Сабміт форми <code>onSubmit</code></li>
        <li>Неконтрольована форма з <code>event.target.elements</code></li>
        <li>Очищення форми після сабміту з <code>event.target.reset()</code></li>
    </ul>
    <li>Форма як окремий компонент</li>
    <ul>
        <li>Пропс сабміту</li>
    </ul>
    <li>Хук <code>useId</code></li>
    <li>Контрольовані елементи</li>
    <ul>
        <li>Атрибути <code>value</code> та <code>onChange</code></li>
        <li>Текстове поле</li>
        <li>Елемент <code>select</code></li>
    </ul>
    <li>Контрольована форма</li>
    <ul>
        <li>Обробка сабміту у форми</li>
        <li>Очищення форми після сабміту</li>
    </ul>
</ul>
</details>

<details>
  <summary>Заняття 2</summary>
<ul>
    <li>Бібліотека <code>Formik</code></li>
    <li>Контейнер форми <code>Formik</code> та <code>Form</code></li>
    <ul>
        <li>Пропс <code>initialValues</code></li>
        <li>Пропс <code>onSubmit</code></li>
    </ul>
    <li>Поля форми <code>Field</code></li>
    <ul>
        <li>Атрибут <code>name</code></li>
        <li>Початкове значення елемнетів</li>
    </ul>
    <li>Відправка форми</li>
    <ul>
        <li>Параметри <code>values</code> та <code>actions</code></li>
        <li>Початкове значення елемнетів</li>
    </ul>
    <li>Стилізація</li>
    <li>Типи полів через пропс <code>as</code></li>
    <li>Валідація з <code>Yup</code></li>
    <ul>
        <li>Схема валідації</li>
        <li>Пропс <code>validationSchema</code></li>
        <li>Компонент <code>ErrorMessage</code></li>
    </ul>

</ul>
</details>
<br/>
<br/>

# Module-04

<details>
  <summary>Заняття 1</summary>
<ul>
    <li>HTTP-запити axios</li>
    <li><a href="https://hn.algolia.com/api"><code>https://hn.algolia.com/api</code></a></li>
    <ul>
        <li>Запит при монтуванні компонента</li>
        <li>Оголошення функції у ефекті</li>
        <li>Обробка даних запиту</li>
        <li>Відображення даних</li>
        <li>Поділ відповідальності</li>
    </ul>
    <li>Пошук через форму</li>
    <li>Індикатор завантаження</li>
    <li>Обробка помилок</li>
    <li>Пагінація</li>
</ul>
</details>

<details>
  <summary>Заняття 2</summary>
<ul>
    <li>Хук <code>useMemo</code></li>
    <li>Хук <code>useRef</code></li>
    <ul>
        <li>Створення</li>
        <li>Життєвий цикл рефа</li>
        <li>Відсутність реактивності</li>
    </ul>
    <li>Контекст</li>
    <ul>
        <li>Створення контексту</li>
        <li>Компонент <code>Provider</code></li>
        <li>Хук <code>useContext</code></li>
        <li>Кастомний компонент провайдеру</li>
    </ul>

</ul>
</details>
<br/>
<br/>

# Module-05

<details>
  <summary>Заняття 1</summary>
<ul>
    <li>Маршрутизація</li>
    <li>Компонент <code>BrowserRouter</code></li>
    <li>Компоненти <code>Route</code> та <code>Routes</code></li>
    <li>Сторінка помилки навігації</li>
    <li>Компоненти <code>Link</code> та <code>NavLink</code></li>
    <li>URL_апраметри з <code>useParams</code></li>
    <li>Вкладені маршрути та <code>Outlet</code></li>
    <li>Деплой на <code>Versel</code> у матеріалах</li>
</ul>
</details>

<details>
  <summary>Заняття 2</summary>
<ul>
    <li>Рядок запиту</li>
    <ul>
        <li>Вилучення з параметрів <code>useSearchParams</code></li>
        <li>Тип значень повертаємий методом <code>get</code></li>
        <li>Зміна рядка запиту</li>
    </ul>
    <li>Обʼєкт місцезнаходження</li>
    <ul>
        <li>Хук <code>useLocation</code></li>
        <li>Властивість <code>location.state</code></li>
    </ul>
    <li>Розділення коду</li>
    <ul>
        <li><code>lazy</code> та <code>Suspence</code></li>
    </ul>
</ul>
</details>

# Module-06

<details>
  <summary>Заняття 1</summary>
<ul>
    <li>Управління станом</li>
        <ul>
            <li>Глобальний стан</li>
            <li>Потік даних</li>
        </ul>
    <li>Встановлення <code>Redux</code> та <code>React Redux</code></li>
    <li>Стор <code>store</code></li>
        <ul>
            <li><code>Redux DevTools</code></li>
        </ul>
    <li>Підписка на стор</li>
        <ul>
            <li>Функції-селектори</li>
        </ul>
    <li>Екшени <code>ections</code></li>
        <ul>
            <li>Генератори екшенів</li>
            <li>Відправлення екшенів</li>
        </ul>
    <li>Редюсери <code>reducers</code></li>
        <ul>
            <li>Що таке редюсер</li>
            <li>Кореневий редюсер</li>
            <li>Обробка екшенів</li>
            <li>Композиція редюсерів</li>
        </ul>
</ul>
</details>

<details>
  <summary>Заняття 2</summary>
<ul>
    <li>Redux Toolkit</li>
    <ul>
        <li><code>createAction</code></li>
        <li><code>createReducer</code></li>
        <ul>
            <li><code>builder</code></li>
            <li><code>immer</code></li>
        </ul>
        <li><code>createSlice</code></li>
        <ul>
            <li><code>prepare</code></li>
        </ul>
    </ul>
</ul>
</details>

# Module-07

<details>
  <summary>Заняття 1</summary>
<ul>
    <li>Асинхронні операції</li>
    <li>Форма стану слайса: <code>loading, error, data</code></li>
    <li>Оголошення операції <code>fetchTasks</code> через <code>createAsyncThunk</code> </li>
        <ul>
            <li>Діспатч операції у компоненті при монтуванні</li>
            <li>Екшени операції: <code>pending, fulfilled, rejected</code></li>
            <li>Обробка результату операцій у слайсі <code>xetraReducers</code></li>
            <li>Обробка запиту, що завершився з помилкою <code>rejectWithValue</code></li>
        </ul>
    <li>Операції <code>addTask</code> та <code>deleteTask</code></li>
        <ul>
            <li>Діспатч операцій у компонентах</li>
            <li>Обробка результату операцій у слайсі</li>
        </ul>
</ul>
</details>

<details>
  <summary>Заняття 2</summary>
<ul>
    <li>Функції-селектори</li>
    <li>Зберігання у файлі слайссу</li>
    <li>Найменування <code>select</code></li>
    <li>Прості селектори</li>
    <li>Складові селектори</li>
    <li>Мемоізація селекторів</li>
</ul>
</details>
