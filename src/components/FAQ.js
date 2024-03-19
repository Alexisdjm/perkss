import React, { useState } from "react";

const FAQs = () => {
  const [toggle, setToggle] = useState({
    first: false,
    second: false,
    third: false,
    forth: false,
    fifth: false,
    sixth: false,
    seventh: false,
    eighth: false,
  });

  const updateToggle = (key, value) => {
    setToggle((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <>
      <section id="faqs">
        <div className="container scroll-reveal">
          <div className="sec-heading text-center mb-5">
            <h5>Estamos para ti</h5>
            <h2 className="fw-bold">Preguntas Frecuentes</h2>
          </div>

          <div className="section-accordions">
            <div className="accordion scroll-reveal">
              <div className="accordion-title">
                <h3>¿Qué es Perkss?</h3>
                <span
                  className={`material-symbols-outlined arrow ${
                    toggle.first ? "active" : ""
                  }`}
                  onClick={() => {
                    updateToggle("first", !toggle.first);
                  }}
                >
                  arrow_forward_ios
                </span>
              </div>
              <div
                className={
                  toggle.first ? "accordion-content active" : "accordion-content"
                }
              >
                <p>
                  Perkss es una app que te permite participar en los programas
                  de fidelidad de tus marcas favoritas desde un solo lugar, con
                  un solo registro y con un proceso de obtención y canje de
                  recompensas sencillo y fácil de entender. Lo mejor, es que
                  respetamos tu privacidad. Las marcas no te enviarán tediosos
                  correos electrónicos o SMS. Queremos hacer de tu experiencia
                  de compra algo satisfactorio, fácil, poco abrumador y repleto
                  de valor.
                </p>
              </div>
            </div>

            <div className="accordion scroll-reveal">
              <div className="accordion-title">
                <h3>¿Qué tipo de recompensas puedo obtener al utilizar Perkss?</h3>
                <span
                  className={`material-symbols-outlined arrow ${
                    toggle.second ? "active" : ""
                  }`}
                  onClick={() => {
                    updateToggle("second", !toggle.second);
                  }}
                >
                  arrow_forward_ios
                </span>
              </div>
              <div
                className={
                  toggle.second ? "accordion-content active" : "accordion-content"
                }
              >
                <ol>
                  <li>Euros de fidelidad de cada marca en la que compras.</li>
                  <li>
                    Perkss Regalos: Las marcas pueden ofrecerte regalos, en
                    forma de dinero, para que ahorres al comprar en sus tiendas
                  </li>
                </ol>
              </div>
            </div>

            <div className="accordion scroll-reveal">
              <div className="accordion-title">
                <h3>¿Cómo obtengo Euros de fidelidad?</h3>
                <span
                  className={`material-symbols-outlined arrow ${
                    toggle.third ? "active" : ""
                  }`}
                  onClick={() => {
                    updateToggle("third", !toggle.third);
                  }}
                >
                  arrow_forward_ios
                </span>
              </div>
              <div
                className={
                  toggle.third ? "accordion-content active" : "accordion-content"
                }
              >
                <p>
                  Simple: comprando en tus marcas favoritas. A diferencia de
                  otros programas o aplicaciones de fidelidad, Perkss{" "}
                  <b>siempre</b> te permitirá ganar y ahorrar <b>dinero</b>, no
                  cupones, puntos o vouchers que no tienen valor real.
                  <br></br> Estos euros podrán ser canjeables en la tienda que
                  los acumules y, cuando alcances el objetivo de consumo,
                  podrás desbloquearlos y canjearlos donde tú quieras.
                </p>
              </div>
            </div>

            <div className="accordion scroll-reveal">
              <div className="accordion-title">
                <h3>¿Por qué se llaman Euros de Fidelidad?</h3>
                <span
                  className={`material-symbols-outlined arrow ${
                    toggle.forth ? "active" : ""
                  }`}
                  onClick={() => {
                    updateToggle("forth", !toggle.forth);
                  }}
                >
                  arrow_forward_ios
                </span>
              </div>
              <div
                className={
                  toggle.forth ? "accordion-content active" : "accordion-content"
                }
              >
                <p>
                  Como consumidores, estamos cansados de las plataformas y apps
                  de fidelidad que te dan puntos para confundirte y que no te
                  proporcionan ningún valor. En Perkss, priorizamos la
                  transparencia y el valor real. Por eso, no hablamos de puntos,
                  hablamos de Euros de fidelidad, para que el consumidor sepa
                  cuánto está ganando en cada momento.
                </p>
              </div>
            </div>

            <div className="accordion scroll-reveal">
              <div className="accordion-title">
                <h3>¿Cuánto valen los Euros de Fidelidad que acumulo?</h3>
                <span
                  className={`material-symbols-outlined arrow ${
                    toggle.fifth ? "active" : ""
                  }`}
                  onClick={() => {
                    updateToggle("fifth", !toggle.fifth);
                  }}
                >
                  arrow_forward_ios
                </span>
              </div>
              <div
                className={
                  toggle.fifth ? "accordion-content active" : "accordion-content"
                }
              >
                <p>
                  Perkss = Euro. Perkss es, simplemente, una forma más
                  divertida de referirnos a los Euros. En Perkss, priorizamos la
                  transparencia y el valor real. Por eso, cuando hablamos de
                  Perkss, realmente hablamos de Euros. Dinero.
                </p>
              </div>
            </div>

            <div className="accordion scroll-reveal">
              <div className="accordion-title">
                <h3>¿Puedo canjear mis Euros de Fidelidad en cualquier tienda de la App?</h3>
                <span
                  className={`material-symbols-outlined arrow ${
                    toggle.sixth ? "active" : ""
                  }`}
                  onClick={() => {
                    updateToggle("sixth", !toggle.sixth);
                  }}
                >
                  arrow_forward_ios
                </span>
              </div>
              <div
                className={
                  toggle.sixth ? "accordion-content active" : "accordion-content"
                }
              >
                <p>
                  Una vez alcanzado el objetivo de consumo, podrás hacerlo. Si
                  decides canjearlos antes de alcanzarlo, solo podrás hacerlo
                  en las propias tiendas en las que los has obtenido.
                  Recomendamos, <b>siempre</b>, esperar a alcanzar el objetivo
                  de consumo antes de canjear los Euros de Fidelidad que
                  acumulas. Podrás ganar y ahorrar más si lo haces!
                </p>
              </div>
            </div>

            <div className="accordion scroll-reveal">
              <div className="accordion-title">
                <h3>¿Pueden desaparecer o expirar mis Euros de Fidelidad acumulados?</h3>
                <span
                  className={`material-symbols-outlined arrow ${
                    toggle.seventh ? "active" : ""
                  }`}
                  onClick={() => {
                    updateToggle("seventh", !toggle.seventh);
                  }}
                >
                  arrow_forward_ios
                </span>
              </div>
              <div
                className={
                  toggle.seventh ? "accordion-content active" : "accordion-content"
                }
              >
                <p>
                  ¡No! Los Euros de Fidelidad que acumulas son 100% tuyos. Su
                  valor no puede ser modificado y es válido para siempre.
                </p>
              </div>
            </div>

            <div className="accordion scroll-reveal">
              <div className="accordion-title">
                <h3>¿Cómo protege Perkss mis datos?</h3>
                <span
                  className={`material-symbols-outlined arrow ${
                    toggle.eighth ? "active" : ""
                  }`}
                  onClick={() => {
                    updateToggle("eighth", !toggle.eighth);
                  }}
                >
                  arrow_forward_ios
                </span>
              </div>
              <div
                className={
                  toggle.eighth ? "accordion-content active" : "accordion-content"
                }
              >
                <p>
                  Perkss valora mucho tu privacidad.
                  <br></br>
                  <br></br>
                  Los datos personales que recopila Perkss se utilizan para
                  ofrecer experiencias, regalos y ofertas personalizadas. No
                  compartimos tus datos con terceros. Nos esforzamos por
                  garantizar un altísimo nivel de anonimidad y privacidad.
                  <br></br>
                  <br></br>
                  La obtención de datos siempre será voluntaria y reversible.
                  Si tú, consumidor, no te sientes cómodo compartiendo tus
                  datos, no tienes ninguna obligación de hacerlo.
                  <br></br>
                  <br></br>
                  Esa es la ideología Perkss.
                  <br></br>
                  <br></br>
                  Para más detalle, consulta nuestros Términos y Condiciones de
                  Uso y Políticas de Privacidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
