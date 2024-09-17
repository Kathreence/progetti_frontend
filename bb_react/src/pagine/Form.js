import React from 'react';

function Form() {
  return (
    <main>
      <form action="conferma.html">
        <div>
          <label htmlFor="nome">Nome</label><br />
          <input type="text" id="nome" required />
        </div>
        <div>
          <label htmlFor="cognome">Cognome</label><br />
          <input type="text" id="cognome" required />
        </div>
        <div>
          <label htmlFor="sesso">Sesso</label><br />
          <select name="sesso" id="sesso">
            <option value="femmina">Femmina</option>
            <option value="maschio">Maschio</option>
          </select>
        </div>
        <div>
          <label htmlFor="email">Email</label><br />
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label htmlFor="messaggio">Messaggio</label><br />
          <textarea name="messaggio" id="messaggio" required></textarea>
        </div>
        <div>
          <button type="submit">Invio</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </main>
  );
}

export default Form;
