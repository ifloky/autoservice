import "./contacts.css";

export const Contacts = () => {
  return (
        <section className='contacts container'>
          <h1>Реквизиты компании</h1>
            <h2>Общество с ограниченной ответственностью «Allukard»</h2>
            <address>
                <p><strong>Юридический адрес:</strong> 123456, г. Минск, ул. Центральная, д. 10, корп. 2, оф. 5</p>
                <p><strong>Почтовый адрес:</strong> 654321, г. Минск, ул. Победы, д. 25, офис 100</p>
                <p><strong>Тел. (факс):</strong> 8017-123-45-67, 8017-765-43-21</p>
            </address>
            <section>
                <h3>Часы работы</h3>
                <p>Мы работаем с 9-00 до 20-00 без выходных</p>
            </section>
            <section>
                <h3>Банковские реквизиты</h3>
                <p><strong>УНП:</strong> 202020202</p>
                <p><strong>Банк:</strong> ОАО "АльфаБанк", адрес банка г. Минск, ул. Клары Цеткин, 16</p>
                <p><strong>р/сч:</strong> BY12ALFA30120001123450005678 валюта BYN</p>
                <p><strong>BIC:</strong> ALFABY2X</p>
                <p><strong>Директор:</strong> Иванов Сергей Петрович, на основании Устава</p>
            </section>
            <section>
                <h3>Специальный счет</h3>
                <p><strong>Банк:</strong> ОАО "АльфаБанк", г. Минск, ул. Клары Цеткин, 16</p>
                <p><strong>р/сч:</strong> BY34ALFA30120090234560007890</p>
                <p><strong>BIC:</strong> ALFABY2X</p>
            </section>
        </section>
  )
}
