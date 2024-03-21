import React, { useState } from 'react';
import axios from 'axios';

const AddressForm = () => {
  const [cep, setCep] = useState('');
  const [addressData, setAddressData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setCep(event.target.value.replace(/\D/g, '')); // Remove caracteres não numéricos
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setAddressData(response.data);
      setError(null); // Limpa erros prévios
    } catch (error) {
      console.error('Erro ao buscar dados de endereço:', error);
      setError('CEP não encontrado ou erro na requisição.'); // Mensagem de erro informativa
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="cep">CEP:</label>
      <input
        type="text"
        id="cep"
        value={cep}
        onChange={handleChange}
        maxLength={8} // Limita tamanho do CEP (opcional)
        required
      />
      <button type="submit">Buscar Endereço</button>
      {error && <p className="error-message">{error}</p>}
      {addressData && (
        <div>
          <p>Logradouro: {addressData.logradouro}</p>
          <p>Bairro: {addressData.bairro}</p>
          <p>Cidade: {addressData.localidade}</p>
          <p>Estado: {addressData.uf}</p>
        </div>
      )}
    </form>
  );
};

export default AddressForm;