import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: "#FAFAFA",
    fontFamily: "Helvetica",
  },
  section: {
    flexDirection: "row",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#D3D3D3",
    paddingBottom: 10,
  },
  column: {
    flex: 1,
    paddingRight: 20,
  },
  beneficio: {
    fontSize: 9,
    color: "#004750",
    fontWeight: "normal",
  },
  row: {
    flexDirection: "row",
    marginBottom: 8,
  },
  label: {
    fontWeight: "bold",
    fontSize: 9,
    color: "#444444",
  },
  value: {
    fontSize: 9,
    marginLeft: 5,
    color: "#666666",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#004080",
  },
  subHeader: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#004080",
    borderBottomWidth: 1,
    borderBottomColor: "#004080",
    paddingBottom: 5,
  },
  table: {
    width: "100%",
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: "row",
    backgroundColor: "#eee9e9",
    borderBottomWidth: 1,
    borderBottomColor: "#D3D3D3",
  },
  tableCol: {
    flex: 1,
    padding: 8,
  },
  tableCell: {
    fontSize: 10,
    color: "#333333",
  },
});

const formatDate = (dateString) => {
  if (!dateString) return "Sem informação";
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
};

const formatCurrency = (value) => {
  if (!value) return "R$ 0,00";
  return `R$ ${parseFloat(value)
    .toFixed(2)
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};

const removeZeros = ( texto ) => {
  const result = texto.replace(/^0+/, '');
  return result
}

const PdfDocumentTop = ({ dados }) => {
  // Defina um valor padrão vazio para `topDadosPessoais`
  const dadosPessoais =
    (dados.topDadosPessoais && dados.topDadosPessoais[0]) || {};
  const contratosEmprestimos = dados.topContratosEmprestimos || [];
  const contratosRmc = dados.contratosRmc || [];
  const contratosRcc = dados.contratosRcc || [];

  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <Text style={styles.beneficio}>
          Beneficio # {dadosPessoais.beneficio || "Sem informação"}
        </Text>
        <Text style={styles.header}>Informações INSS</Text>
        <View style={styles.section}>
          <View style={styles.column}>
            <View style={styles.row}>
              <Text style={styles.label}>Nome:</Text>
              <Text style={styles.value}>
                {dadosPessoais.nome || "Sem informação"}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>CPF:</Text>
              <Text style={styles.value}>
                {dadosPessoais.cpf || "Sem informação"}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Data de Nascimento:</Text>
              <Text style={styles.value}>
                {formatDate(dadosPessoais.data_nascimento)}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Situação:</Text>
              <Text style={styles.value}>
                {dadosPessoais.situacao || "Sem informação"}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Elegível para empréstimo:</Text>
              <Text style={styles.value}>
                {dadosPessoais.elegivel_emprestimo ? "Sim" : "Não"}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Endereço:</Text>
              <Text style={styles.value}>
                {dadosPessoais.endereco || "Sem informação"}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Possui Procurador:</Text>
              <Text style={styles.value}>
                {dadosPessoais.possui_procurador ? "Sim" : "Não"}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Pensão Alimentícia:</Text>
              <Text style={styles.value}>
                {dadosPessoais.pensao_alimenticia ? "Sim" : "Não"}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Espécie:</Text>
              <Text style={styles.value}>
                {dadosPessoais.especie_descricao || "Sem informação"} (Código:{" "}
                {dadosPessoais.especie_codigo || "N/A"})
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>
                Valor margem Disponível Empréstimo:
              </Text>
              <Text style={styles.value}>
                {formatCurrency(dadosPessoais.margem_disponivel_emprestimo)}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>
                Valor margem Utilizada Empréstimo:
              </Text>
              <Text style={styles.value}>
                {formatCurrency(dadosPessoais.margem_utilizada_emprestimo)}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Valor margem Disponível RMC:</Text>
              <Text style={styles.value}>
                {formatCurrency(dadosPessoais.margem_disponivel_rmc)}
              </Text>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.row}>
              <Text style={styles.label}>Valor margem Disponível RCC:</Text>
              <Text style={styles.value}>
                {formatCurrency(dadosPessoais.margem_disponivel_rcc)}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Margem Reservada RCC:</Text>
              <Text style={styles.value}>
                {formatCurrency(dadosPessoais.margem_reservada_rcc)}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Margem Reservada RMC:</Text>
              <Text style={styles.value}>
                {formatCurrency(dadosPessoais.margem_reservada_rmc)}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Contratos Ativos:</Text>
              <Text style={styles.value}>
                {dadosPessoais.contratosAtivos || "Sem informação"}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Valor Base:</Text>
              <Text style={styles.value}>
                {formatCurrency(dadosPessoais.valorBase)}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>UF Benefício:</Text>
              <Text style={styles.value}>
                {dadosPessoais.uf_beneifico || "Sem informação"}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Máx Comprometido Permitido:</Text>
              <Text style={styles.value}>
                {formatCurrency(dadosPessoais.maxComprometidoPermitido)}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Máx Comprometido RCC:</Text>
              <Text style={styles.value}>
                {formatCurrency(dadosPessoais.maxComprometidoRcc)}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Código Benefício:</Text>
              <Text style={styles.value}>
                {dadosPessoais.beneficio || "Sem informação"}
              </Text>
            </View>
          </View>
        </View>
        </Page>
        <Page size="A4" orientation="landscape" style={styles.page}>
        <Text style={styles.subHeader}>Empréstimos Consignados</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
           <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Contrato</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Situação</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Banco</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>cod.banco</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Vl.Parcela</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Vl.Liberado</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Sald.Devedor</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Parcelas</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Dt.Inclusão</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Dt.Início</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Dt.Fim</Text>
            </View>
            <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Taxa</Text>
            </View>
          </View>
          {contratosEmprestimos.map((contrato, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {removeZeros(contrato.contrato) || "Sem informação"}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {contrato.situacao || "Sem informação"}
                </Text>
              </View>                         
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                   {contrato.banco_descricao}
                </Text>
                
              </View>
              <View  style={styles.tableCol}>
              <Text style={styles.tableCell}>
                  {contrato.banco_codigo}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {formatCurrency(contrato.valor_parcela)}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {formatCurrency(contrato.valor_liberado)}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {formatCurrency(contrato.saldo_devedor)}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {contrato.quantidade_parcelas}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {formatDate(contrato.data_inclusao)}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {formatDate(contrato.competencia_inicio_desconto)}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {formatDate(contrato.competencia_fim_desconto)}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {contrato.taxa}
                </Text>
              </View>
            </View>
          ))}
        </View>
      
     
        <Text style={styles.subHeader}>Cartão RMC</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Codigo.Banco</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Banco
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Contrato</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Dt.Inclusao
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Situacao</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Tipo.Emprestimo</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
              valor_limite_cartao</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Valor_Reservado
              </Text>
            </View>
          </View>
          {contratosRmc.map((contrato, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {contrato.banco_codigo || "Sem informação"}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {contrato.banco_descricao || "Sem informação"}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {removeZeros(contrato.contrato) || "Sem informação"}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {formatDate(contrato.data_inclusao)}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {contrato.situacao}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {contrato.tipo_emprestimo}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {formatCurrency(contrato.valor_limite_cartao)}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {formatCurrency(contrato.valor_reservado)}
                </Text>
              </View>
             
            </View>
          ))}
        </View>
      </Page>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <Text style={styles.subHeader}>Cartão RCC</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Banco codigo</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Banco nome</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Contrato</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Dt inclusao</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Situação</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Tipo emprestimo</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Valor limite cartao</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Valor Reservado</Text>
            </View>
          </View>
          {contratosRcc.map((contrato, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {contrato.banco_codigo || "Sem informação"}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {contrato.banco_descricao || "Sem informação"}
                </Text>
              </View>
              <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                  {removeZeros(contrato.contrato) || "Sem informação"}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {formatDate(contrato.data_inclusao )|| "Sem informação"}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {contrato.situacao}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {contrato.tipo_emprestimo}                  
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {formatCurrency(contrato.valor_limite_cartao)}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {formatCurrency(contrato.valor_reservado)}
                </Text>
              </View>
              
            
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default PdfDocumentTop;
