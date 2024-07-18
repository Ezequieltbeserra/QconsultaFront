import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#F3F3F3',
    fontFamily: 'Helvetica',
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
    borderBottom: '1px solid #C0C0C0',
    paddingBottom: 10,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    paddingRight: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#333333',
  },
  value: {
    fontSize: 12,
    marginLeft: 5,
    color: '#555555',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#003366',
  },
  subHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#003366',
  },
  table: {
    display: 'flex',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: '#E6E6E6',
  },
  tableCol: {
    flex: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
  },
  tableCell: {
    margin: 5,
    fontSize: 10,
    color: '#333333',
  }
});

const formatDate = (dateString) => {
  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year}`;
};

const formatCurrency = (value) => {
  return `R$ ${parseFloat(value).toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
};


const PdfDocument = ({ dados }) => {
  const dadosPessoais = dados.listaDadosPessoais[0];
  const dadosBeneficio = dados.listaDadosBeneficio[0];
  const dadosBancarios = dados.listaDadosBancarios[0];
  return (
  
  <Document>
    <Page size="A4" orientation='landscape' style={styles.page}>
    <Text style={styles.header}>Informações do Cliente</Text>
        <View style={styles.section}>
          <View style={styles.column}>
            <View style={styles.row}>
              <Text style={styles.label}>Nome:</Text>
              <Text style={styles.value}>{dadosPessoais.nome}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>CPF:</Text>
              <Text style={styles.value}>{dadosPessoais.cpf}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Data de Nascimento:</Text>
              <Text style={styles.value}>{formatDate(dadosPessoais.dataNascimento)}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Situação:</Text>
              <Text style={styles.value}>{dadosBeneficio.situacao}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Elegível para empréstimo:</Text>
              <Text style={styles.value}>{dadosBeneficio.elegivel ? "Sim" : "Não"}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Possui Procurador:</Text>
              <Text style={styles.value}>{dadosBeneficio.possuiProcurador ? "Sim" : "Não"}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Pensão Alimentícia:</Text>
              <Text style={styles.value}>{dadosBeneficio.pensao ? "Sim" : "Não"}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Espécie:</Text>
              <Text style={styles.value}>{dadosBeneficio.especie}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Valor margem consignável Emp:</Text>
              <Text style={styles.value}>{formatCurrency(dadosBeneficio.valorMargemConsignavelEmp)}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Valor margem disponível Emp:</Text>
              <Text style={styles.value}>{formatCurrency(dadosBeneficio.valorMargemDisponivelEmp)}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Valor margem disponível Rmc:</Text>
              <Text style={styles.value}>{formatCurrency(dadosBeneficio.valorMargemDisponivelRMC)}</Text>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.row}>
              <Text style={styles.label}>Valor margem disponível Rcc:</Text>
              <Text style={styles.value}>{formatCurrency(dadosBeneficio.valorMargemDisponivelRcc)}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Representante Legal:</Text>
              <Text style={styles.value}>{dadosBeneficio.representanteLegal}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Base de Cálculo:</Text>
              <Text style={styles.value}>{formatCurrency(dadosBeneficio.basedeCalculo)}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Contratos Ativos:</Text>
              <Text style={styles.value}>{dadosBeneficio.contratosAtivos}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Contratos Suspensos:</Text>
              <Text style={styles.value}>{dadosBeneficio.contratosSuspensos}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Contratos Reserv Refin:</Text>
              <Text style={styles.value}>{dadosBeneficio.contratosReservRefin}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Máx Comprometido Permitido:</Text>
              <Text style={styles.value}>{formatCurrency(dadosBeneficio.maxComprometidoPermitido)}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Número Benefício:</Text>
              <Text style={styles.value}>{dadosBeneficio.numeroBeneficio}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Banco:</Text>
              <Text style={styles.value}>{dadosBancarios.nomeBanco}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Agência:</Text>
              <Text style={styles.value}>{dadosBancarios.agencia}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Conta:</Text>
              <Text style={styles.value}>{dadosBancarios.cc}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Meio de Pagamento:</Text>
              <Text style={styles.value}>{dadosBancarios.tipoMeioPagemento}</Text>
            </View>
          </View>
        </View>
    </Page>
    <Page size="A4" orientation="landscape" style={styles.page}>
      <Text style={styles.subHeader}>Empréstimos Bancários</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}><Text style={styles.tableCell}>Contrato</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>Banco</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>Data inclusão</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>Início Desconto</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>Fim Desconto</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>Situação</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>Qtd. Parcelas</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>Valor Emprestado</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>Valor Liberado</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>Valor Parcela</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>Saldo Devedor</Text></View>
        </View>
        {dados.listaEmprestimo && dados.listaEmprestimo.map((emprestimo, index) => (
          <View style={styles.tableRow} key={index}>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{emprestimo.numeroContrato}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{emprestimo.nomeBanco}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{emprestimo.dataAverbacao}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{emprestimo.competenciaInicio}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{emprestimo.competenciaFim}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{emprestimo.situacao}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{emprestimo.qtdParcelas}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{formatCurrency(emprestimo.valorEmprestado)}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{formatCurrency(emprestimo.valorLiberado)}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{formatCurrency(emprestimo.valorParcela)}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{formatCurrency(emprestimo.valorEmprestado - parseFloat(emprestimo.valorPago))}</Text></View>
          </View>
        ))}
      </View>
      <Text style={styles.subHeader}>Contratos Rmc</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}><Text style={styles.tableCell}>Contrato</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>Tipo Emprestimo</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>Banco</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>Data inclusão</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>Situação</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>Valor Parcela</Text></View>
        </View>
        {dados.listaRmc && dados.listaRmc.map((contrato, index) => (
          <View style={styles.tableRow} key={index}>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{contrato.numeroEmprestimo}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{contrato.tipoEmprestimo}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{contrato.codigoBanco} - {contrato.nomeBanco}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{contrato.dataInclusao}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{contrato.situacao}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{formatCurrency(contrato.valor)}</Text></View>
          </View>
        ))}
      </View>
      <Text style={styles.subHeader}>Contratos RCC</Text>
      <View style={styles.table}> 
        <View style={styles.tableRow}>
          <View style={styles.tableCol}><Text style={styles.tableCell}>Contrato</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>Banco</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>Data inclusão</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>Situação</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>Valor Parcela</Text></View>
        </View>
        {dados.novosRcc && dados.novosRcc.map((contrato, index) => (
          <View style={styles.tableRow} key={index}>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{contrato.numeroEmprestimo}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{contrato.nomeBanco}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{contrato.dataInclusao}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{contrato.situacao}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{formatCurrency(contrato.valor)}</Text></View>
          </View>
        ))}
      </View>
    </Page>
  </Document>
)};

export default PdfDocument;
