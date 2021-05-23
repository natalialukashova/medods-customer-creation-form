<template>
  <div class="container">
    <main>
      <form class="card">
        <h1 class="card__title">Регистрация</h1>
        <div class="card__field">
          <p class="card__field_title">Фамилия</p>
          <input class="card__field_text" type="text" id="lastName" placeholder="Фамилия" />
        </div>
        <div class="card__field">
          <p class="card__field_title">Имя</p>
          <input class="card__field_text" type="text" id="firstName" placeholder="Имя" />
        </div>
        <div class="card__field">
          <p class="card__field_title">Отчество</p>
          <input class="card__field_text" type="text" id="surname" placeholder="Отчество" />
        </div>
        <div class="card__field">
          <p class="card__field_title">Дата рождения</p>
          <input class="card__field_text" type="text" id="birthday" placeholder="__.__.____" />
        </div>
        <div class="card__field">
          <p class="card__field_title">Номер телефона</p>
          <input class="card__field_text" type="tel" id="tel" placeholder="+7 ___ ___ __ __" />
        </div>
        <div class="card__field">
          <p class="card__field_title">Пол</p>
          <input class="card__field_radio" name="sex" type="radio" value="Мужской" />Мужской
          <input class="card__field_radio" name="sex" type="radio" value="Женский" />Женский
        </div>
        <div class="card__field">
          <p class="card__field_title">Группа клиентов</p>
          <select id="customerType" class="card__field_text">
            <option value="VIP">VIP</option>
            <option value="withProblem">Проблемные</option>
            <option value="policy">ОМС</option>
          </select>
        </div>
        <div class="card__field">
          <p class="card__field_title">Лечащий врач</p>
          <select id="doctor" class="card__field_text">
            <option value="Ivanov">Иванов</option>
            <option value="Zakharov">Захаров</option>
            <option value="Chernysheva">Чернышева</option>
          </select>
        </div>
        <div class="card__field">
          <input class="card__field_checkbox" type="checkbox" name="sms" id="sms" />
          <p class="card__field_title card__field_title-right">Не отправлять СМС</p>
        </div>

        <h3 class="card__subtitle">Адрес</h3>
        <div class="card__field">
          <p class="card__field_title">Индекс</p>
          <input class="card__field_text" type="text" id="index">
        </div>
        <div class="card__field">
           <p class="card__field_title">Страна</p>
           <input class="card__field_text" type="text" id="country">
        </div>
        <div class="card__field">
           <p class="card__field_title">Область</p>
           <input class="card__field_text" type="text" id="region">
        </div>
        <div class="card__field">
           <p class="card__field_title">Город</p>
           <input class="card__field_text" type="text" id="city">
        </div>
        <div class="card__field">
           <p class="card__field_title">Улица</p>
           <input class="card__field_text" type="text" id="street">
        </div>
        <div class="card__field">
           <p class="card__field_title">Дом</p>
           <input class="card__field_text" type="text" id="homeNum">
        </div>

        <h3 class="card__subtitle">Паспорт</h3>
        <div class="card__field">
           <p class="card__field_title">Тип документа</p>
           <select name="document" id="doc" class="card__field_text">
              <option value="">Паспорт</option>
              <option value="">Свидетельство о рождении</option>
              <option value="">Вод. удостоверение</option>
           </select>
        </div>
        <div class="card__field">
           <p class="card__field_title">Серия</p>
           <input class="card__field_text" type="text" id="series" placeholder="__ __">
        </div>
        <div class="card__field">
           <p class="card__field_title">Номер</p>
           <input class="card__field_text" type="text" id="docNum" placeholder="__ __ __">
        </div>
        <div class="card__field">
           <p class="card__field_title">Кем выдан</p>
           <input class="card__field_text" type="text" id="issusedBy" placeholder="Заполните точно как в документе">
        </div>
        <div class="card__field">
           <p class="card__field_title">Дата выдачи</p>
           <input class="card__field_text" type="text" id="dateIssue" placeholder="__.__.____">
        </div>
      </form>
    </main>
  </div>
</template>