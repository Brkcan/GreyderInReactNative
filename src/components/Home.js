import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  Button,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import Card from './Card';
import axios from 'axios';
import Card1 from './Card1';
import Colors from './Colors';
import styled from 'styled-components';

class Home extends Component {
  state = {
    defaultmagaza: 1,
    counter: 0,
    data0: [],
    data2: [],
    data3: [],
    data4: [],
    data6: [],
    data7: [],
    data10:[],
    data11:[],
    data12:[],
    data14:[],
    data30:[],
    data31:[],
    data32:[],
    data33:[],
    data34:[],
    data35:[],
    data39:[],
    data40:[],
    data50:[],
    data51:[],
    data55:[],
    data56:[],
    data60:[],
    data61:[],
    data70:[],
    data71:[],
    data72:[],
    data73:[],
    data74:[],
    data75:[],
    data76:[],
    data77:[],
    data78:[],
    data79:[],
    data80:[],
    data81:[],
    data82:[],
    data83:[],
    data84:[],
    data85:[],
    data86:[],
    data87:[],
    data88:[],
    data89:[],
    data90:[],
    data91:[],
    data92:[],
    data93:[],
    data94:[],
    data95:[],
    data96:[],
    data97:[],
    data98:[],
    data99:[],
    data100:[],
    data101:[],
    data102:[],
    data103:[],
    dunmagazatutar:[],
    dunmagazatutarlfl:[],
    duninternettutar:[],
    duninternettutarlfl:[],
    dunyurtdisitutar:[],
    dunyurtdisitutarlfl:[],
    dunfranchisetutar:[],
    dunfranchisetutarlfl:[],
    dunmerkezfranchisetutar:[],
    dunmerkezfranchisetutarlfl:[],
    tutarlargosterim: null,
    ciftgosterim: null,
    tekgosterim:null,
    Lflyurtdisi: 0,
    LflInternet:0,
    bugunLflMagazalar: 0,
    LflFranchise: 0,
    LflMerkezFranchise:0,
    tlcıkart: false,
    animation: new Animated.Value(1),
  }

  async componentDidMount() {
    await axios
      .get('http://localhost:8080/api/entumsatistoplam/all')
      .then(res2 => this.setState({
      data2: res2.data,
    }))
    await axios
      .get('http://localhost:8080/api/entumanlikciftadetsiralamasi/all')
      .then(res10 => this.setState({
      data10: res10.data,
    }))
    await axios
      .get('http://localhost:8080/api/entumanliktektadetsiralamasi/all')
      .then(res11 => this.setState({
      data11: res11.data,
    }))
    await axios
      .get('http://localhost:8080/api/getmagazalarlflicinsiralamasi/all')
      .then(res39 => this.setState({
      data39: res39.data,
    }))
    await axios
      .get('http://localhost:8080/api/getmagazalarlflsiralamasi/all')
      .then(res40 => this.setState({
      data40: res40.data,
    }))
    await axios
      .get('http://localhost:8080/api/getinternetmagazasiralamasi/all')
      .then(res34 => this.setState({
      data34: res34.data,
    }))
    await axios
      .get('http://localhost:8080/api/getinternetmagazalflsiralamasi/all')
      .then(res35 => this.setState({
      data35: res35.data,
    }))
    await axios
      .get('http://localhost:8080/api/getyurtdisisiralama/all')
      .then(res50 => this.setState({
      data50: res50.data,
    }))
    await axios
      .get('http://localhost:8080/api/getyurtdisisiralamalfl/all')
      .then(res51 => this.setState({
      data51: res51.data,
    }))
    await axios
      .get('http://localhost:8080/api/getfranchcisesiralama/all')
      .then(res60 => this.setState({
      data60: res60.data,
    }))
    await axios
      .get('http://localhost:8080/api/getfranchcisesiralamalfl/all')
      .then(res61 => this.setState({
      data61: res61.data,
    }))
    await axios
      .get('http://localhost:8080/api/getmerkezfrancisesiralama/all')
      .then(res55 => this.setState({
      data55: res55.data,
    }))
    await axios
      .get('http://localhost:8080/api/getmerkezfrancisesiralamalfl/all')
      .then(res56 => this.setState({
      data56: res56.data,
    }))
    await axios
      .get('http://localhost:8080/api/engecenhaftatoplam/all')
      .then(res4 => this.setState({
      data4: res4.data,
    }))
    await axios
      .get('http://localhost:8080/api/engecenhaftaciftsiralamasi/all')
      .then(res32 => this.setState({
      data32: res32.data,
    }))
    await axios
      .get('http://localhost:8080/api/engecenhaftateksiralamasi/all')
      .then(res33 => this.setState({
      data33: res33.data,
    }))
    await axios
      .get('http://localhost:8080/api/getmagazagecenhaftatoplam/all')
      .then(res80 => this.setState({
      data80: res80.data,
    }))
    await axios
      .get('http://localhost:8080/api/getmagazagecenhaftatoplamlfl/all')
      .then(res81 => this.setState({
      data81: res81.data,
    }))
    await axios
      .get('http://localhost:8080/api/getinternetgecenhaftatoplam/all')
      .then(res82 => this.setState({
      data82: res82.data,
    }))
    await axios
      .get('http://localhost:8080/api/getinternetgecenhaftatoplamlfl/all')
      .then(res83 => this.setState({
      data83: res83.data,
    }))
    await axios
      .get('http://localhost:8080/api/getyurtdisigecenhaftatoplam/all')
      .then(res84 => this.setState({
      data84: res84.data,
    }))
    await axios
      .get('http://localhost:8080/api/getyurtdisigecenhaftatoplamlfl/all')
      .then(res85 => this.setState({
      data85: res85.data,
    }))
    await axios
      .get('http://localhost:8080/api/getfranchisegecenhaftatoplam/all')
      .then(res86 => this.setState({
      data86: res86.data,
    }))
    await axios
      .get('http://localhost:8080/api/getfranchisegecenhaftatoplamlfl/all')
      .then(res87 => this.setState({
      data87: res87.data,
    }))
    await axios
      .get('http://localhost:8080/api/getmerkezfranchisegecenhaftatoplam/all')
      .then(res88 => this.setState({
      data88: res88.data,
    }))
    await axios
      .get('http://localhost:8080/api/getmerkezfranchisegecenhaftatoplamlfl/all')
      .then(res89 => this.setState({
      data89: res89.data,
    }))
    await axios
      .get('http://localhost:8080/api/getgecenaytoplamciro/all')
      .then(res90 => this.setState({
      data90: res90.data,
    }))
    await axios
      .get('http://localhost:8080/api/getgecenaytoplamCIFT/all')
      .then(res103 => this.setState({
      data92: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/getgecenaytoplamADET/all')
      .then(res103 => this.setState({
      data91: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/getgecenaymagazatoplam/all')
      .then(res103 => this.setState({
      data93: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/getgecenaymagazatoplamlfl/all')
      .then(res103 => this.setState({
      data94: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/getgecenayinternettoplam/all')
      .then(res103 => this.setState({
      data95: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/getgecenayinternettoplamlfl/all')
      .then(res103 => this.setState({
      data96: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/getgecenayyurtdisitoplam/all')
      .then(res103 => this.setState({
      data97: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/getgecenayyurtdisitoplamlfl/all')
      .then(res103 => this.setState({
      data98: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/getgecenayfranchisetoplam/all')
      .then(res103 => this.setState({
      data99: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/getgecenayfranchisetoplamlfl/all')
      .then(res103 => this.setState({
      data100: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/getgecenaymerkezfranchisetoplam/all')
      .then(res103 => this.setState({
      data101: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/getgecenaymerkezfranchisetoplamlfl/all')
      .then(res103 => this.setState({
      data102: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/enduntoplam/all')
      .then(res103 => this.setState({
      data3: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/endunciftadetsiralamasi/all')
      .then(res103 => this.setState({
      data30: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/enduntekadetsiralamasi/all')
      .then(res103 => this.setState({
      data31: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/getmagazaduntoplam/all')
      .then(res103 => this.setState({
      dunmagazatutar: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/getdunlfltoplammagazalar/all')
      .then(res103 => this.setState({
      dunmagazatutarlfl: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/getinternetduntoplam/all')
      .then(res103 => this.setState({
      duninternettutar: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/getinternetduntoplamlfl/all')
      .then(res103 => this.setState({
      duninternettutarlfl: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/getyurtdisiduntoplam/all')
      .then(res103 => this.setState({
      dunyurtdisitutar: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/getyurtdisiduntoplamlfl/all')
      .then(res103 => this.setState({
      dunyurtdisitutarlfl: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/getfranchiseduntoplam/all')
      .then(res103 => this.setState({
      dunfranchisetutar: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/getfranchiseduntoplamlfl/all')
      .then(res103 => this.setState({
      dunfranchisetutarlfl: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/getmerkezfranchiseduntoplam/all')
      .then(res103 => this.setState({
      dunmerkezfranchisetutar: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/getmerkezfranchiseduntoplamlfl/all')
      .then(res103 => this.setState({
      dunmerkezfranchisetutarlfl: res103.data,
    }))
  }
  _bugun = () => {
    this.setState({
      tutarlargosterim: this.state.data2.map((res2, Id) =>
        res2.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
),
      ciftgosterim: this.state.data10.map((res5, Id) => res5.miktar),
      tekgosterim: this.state.data11.map((res6, Id) => res6.miktar),
      tlcıkart: true,
      // Magazalar
      magazaIsmi: this.state.data39.map((res39, Id) => res39.m_f),
      magazaTutar: this.state.data39.map((res40, Id) => res40.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")),
      magazaTutar2: this.state.data39.map((res40, Id) => res40.tutar.toFixed(0)),
      magazalarBugunLfldeger: this.state.data40.map((res42, Id) => res42.tutar.toFixed(0)),
      bugunLflMagazalar: Math.abs(100 * ((this.state.magazalarBugunLfldeger - this.state.magazaTutar2) / this.state.magazalarBugunLfldeger)),


      // Internet
      InternetIsmi: this.state.data34.map((res34, Id) => res34.m_f),
      InternetTutar: this.state.data34.map((res34, Id) => res34.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")),
      InternetTutar2: this.state.data34.map((res35, Id) => res35.tutar.toFixed(0)),
      InternetLfldeger: this.state.data35.map((res35, Id) => res35.tutar.toFixed(0)),
      LflInternet: Math.abs(100 * ((this.state.InternetLfldeger - this.state.InternetTutar2) / this.state.InternetLfldeger)),

      //Yurtdısı
      YurtdisiIsmi: this.state.data50.map((res104, Id) => res104.m_f),
      YurtdisiTutar: this.state.data50.map((res105, Id) => res105.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")),
      YurtdisiTutar2: this.state.data50.map((res105, Id) => res105.tutar.toFixed(0)),
      Yurtdisilfldeger: this.state.data51.map((res106, Id) => res106.tutar.toFixed(0)),
      Lflyurtdisi: Math.abs(100 * ((this.state.Yurtdisilfldeger - this.state.YurtdisiTutar2) / this.state.Yurtdisilfldeger)),


      //Franchise
      FranchiseIsmi: this.state.data60.map((res110, Id) => res110.m_f),
      FranchiseTutar: this.state.data60.map((res111, Id) => res111.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")),
      FranchiseTutar2: this.state.data60.map((res134, Id) => res134.tutar.toFixed(0)),
      franchiselfldeger: this.state.data61.map((res112, Id) => res112.tutar.toFixed(0)),
      LflFranchise: Math.abs(100 * ((this.state.franchiselfldeger - this.state.FranchiseTutar2) / this.state.franchiselfldeger)),

      //merkezFranchise
      merkezFranchiseIsmi: this.state.data55.map((res113, Id) => res113.m_f),
      merkezFranchiseTutar: this.state.data55.map((res114, Id) => res114.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")),
      merkezFranchiseTutar2: this.state.data55.map((res135,Id) => res135.tutar.toFixed(0)),
      merkezFranchiselfldeger: this.state.data56.map((res115, Id) => res115.tutar.toFixed(2)),
      LflMerkezFranchise: Math.abs(100 * ((this.state.merkezFranchiselfldeger - this.state.merkezFranchiseTutar2) / this.state.merkezFranchiselfldeger)),
    })

       console.log("bugune basıldı");
}
  _dun = () => {
    this.setState({
      defaultmagaza: 0,
      tutarlargosterim: this.state.data3.map((res10, Id) =>
        res10.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."),
      ),
      ciftgosterim: this.state.data30.map((res5, Id) => res5.miktar),
      tekgosterim: this.state.data31.map((res6, Id) => res6.miktar),

      // Magazalar
      magazaIsmi: this.state.data39.map((res39, Id) => res39.m_f),
      magazaTutar: this.state.dunmagazatutar.map((res40, Id) => res40.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")),
      magazaTutar2: this.state.dunmagazatutar.map((res40, Id) => res40.tutar.toFixed(0)),
      magazalarBugunLfldeger: this.state.dunmagazatutarlfl.map((res42, Id) => res42.tutar.toFixed(0)),
      bugunLflMagazalar: Math.abs(100 * ((this.state.magazalarBugunLfldeger - this.state.magazaTutar2) / this.state.magazalarBugunLfldeger)),


      // Internet
      InternetIsmi: this.state.data34.map((res34, Id) => res34.m_f),
      InternetTutar: this.state.duninternettutar.map((res34, Id) => res34.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")),
      InternetTutar2: this.state.duninternettutar.map((res35, Id) => res35.tutar.toFixed(0)),
      InternetLfldeger: this.state.duninternettutarlfl.map((res35, Id) => res35.tutar.toFixed(0)),
      LflInternet: Math.abs(100 * ((this.state.InternetLfldeger - this.state.InternetTutar2) / this.state.InternetLfldeger)),

      //Yurtdısı
      YurtdisiIsmi: this.state.data50.map((res104, Id) => res104.m_f),
      YurtdisiTutar: this.state.dunyurtdisitutar.map((res105, Id) => res105.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")),
      YurtdisiTutar2: this.state.dunyurtdisitutar.map((res105, Id) => res105.tutar.toFixed(0)),
      Yurtdisilfldeger: this.state.dunyurtdisitutarlfl.map((res106, Id) => res106.tutar.toFixed(0)),
      Lflyurtdisi: Math.abs(100 * ((this.state.Yurtdisilfldeger - this.state.YurtdisiTutar2) / this.state.Yurtdisilfldeger)),


      //Franchise
      FranchiseIsmi: this.state.data60.map((res110, Id) => res110.m_f),
      FranchiseTutar: this.state.dunfranchisetutar.map((res111, Id) => res111.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")),
      FranchiseTutar2: this.state.dunfranchisetutar.map((res134, Id) => res134.tutar.toFixed(0)),
      franchiselfldeger: this.state.dunfranchisetutarlfl.map((res112, Id) => res112.tutar.toFixed(0)),
      LflFranchise: Math.abs(100 * ((this.state.franchiselfldeger - this.state.FranchiseTutar2) / this.state.franchiselfldeger)),

      //merkezFranchise
      merkezFranchiseIsmi: this.state.data55.map((res113, Id) => res113.m_f),
      merkezFranchiseTutar: this.state.dunmerkezfranchisetutar.map((res114, Id) => res114.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")),
      merkezFranchiseTutar2: this.state.dunmerkezfranchisetutar.map((res135,Id) => res135.tutar.toFixed(0)),
      merkezFranchiselfldeger: this.state.dunmerkezfranchisetutarlfl.map((res115, Id) => res115.tutar.toFixed(2)),
      LflMerkezFranchise: Math.abs(100 * ((this.state.merkezFranchiselfldeger - this.state.merkezFranchiseTutar2) / this.state.merkezFranchiselfldeger)),
    })
    console.log('InternetTutar2 : ' + this.state.test);
    console.log('InternetLfldeger : ' + this.state.InternetLfldeger);
    console.log('result : ' + (100 * (this.state.InternetLfldeger - this.state.InternetTutar2) / this.state.InternetLfldeger));
  }
  _gecenHafta = () => {
    this.setState({
      defaultmagaza: 0,
      tutarlargosterim: this.state.data4.map((res4, Id) =>
        res4.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."),
      ),
      ciftgosterim: this.state.data32.map((res5, Id) => res5.miktar),
      tekgosterim: this.state.data33.map((res6, Id) => res6.miktar),

      //Magaza
        magazaIsmi: this.state.data39.map((res39, Id) => res39.m_f),
        magazaTutar: this.state.data80.map((res150, Id) => res150.tutar.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")),
        magazaTutar2: this.state.data80.map((res130, Id) => res130.tutar.toFixed(0)),
        magazalarBugunLfldeger: this.state.data81.map((res131, Id) => res131.tutar.toFixed(0)),
        bugunLflMagazalar: Math.abs(100 * ((this.state.magazalarBugunLfldeger - this.state.magazaTutar2) / this.state.magazalarBugunLfldeger)),

        //Internet
        InternetIsmi: this.state.data34.map((res100, Id) => res100.m_f),
        InternetTutar: this.state.data82.map((res132, Id) => res132.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")),
        InternetTutar2: this.state.data82.map((res133, Id) => res133.tutar.toFixed(0)),
        InternetLfldeger: this.state.data83.map((res133, Id) => res133.tutar.toFixed(0)),
        LflInternet: Math.abs(100 * ((this.state.InternetLfldeger - this.state.InternetTutar2) / this.state.InternetLfldeger)),

        //Yurtdisi
        YurtdisiIsmi: this.state.data50.map((res116, Id) => res116.m_f),
        YurtdisiTutar: this.state.data84.map((res117, Id) => res117.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")),
        YurtdisiTutar2: this.state.data84.map((res201, Id) => res201.tutar.toFixed(0)),
        yurtdisiLflTutar: this.state.data85.map((res118, Id) => res118.tutar.toFixed(0)),
        Lflyurtdisi: Math.abs(100 * ((this.state.yurtdisiLflTutar - this.state.YurtdisiTutar2) / this.state.yurtdisiLflTutar)),

        //Franchise
        FranchiseIsmi: this.state.data60.map((res110, Id) => res110.m_f),
        FranchiseTutar: this.state.data86.map((res119, Id) => res119.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")),
        FranchiseTutar2: this.state.data86.map((res141, Id) => res141.tutar.toFixed(0)),
        franchiselfldeger: this.state.data87.map((res120, Id) => res120.tutar.toFixed(0)),
        LflFranchise: Math.abs(100 * ((this.state.franchiselfldeger - this.state.FranchiseTutar2) / this.state.franchiselfldeger)),

        //Merkez franchise
        merkezFranchiseIsmi: this.state.data55.map((res124, Id) => res124.m_f),
        merkezFranchiseTutar: this.state.data88.map((res125, Id) => res125.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")),
        merkezFranchiseTutar2: this.state.data88.map((res142, Id) => res142.tutar.toFixed(0)),
        merkezFranchiselfldeger: this.state.data89.map((res126, Id) => res126.tutar.toFixed(0)),
        LflMerkezFranchise: Math.abs(100 * ((this.state.merkezFranchiselfldeger - this.state.merkezFranchiseTutar2) / this.state.merkezFranchiselfldeger)),
    })
  }

  _gecenAy = () => {
    this.setState({
      defaultmagaza: 0,
      tutarlargosterim: this.state.data90.map((res4, Id) =>
        res4.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."),
      ),
      ciftgosterim: this.state.data92.map((res5, Id) => res5.miktar),
      tekgosterim: this.state.data91.map((res6, Id) => res6.miktar),

      //Magaza
      magazaIsmi: this.state.data39.map((res39, Id) => res39.m_f),
      magazaTutar: this.state.data93.map((res151, Id) => res151.tutar.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")),
      magazaTutar2: this.state.data93.map((res130, Id) => res130.tutar.toFixed(0)),
      magazalarBugunLfldeger: this.state.data94.map((res131, Id) => res131.tutar.toFixed(0)),
      bugunLflMagazalar: Math.abs(100 * ((this.state.magazalarBugunLfldeger - this.state.magazaTutar2) / this.state.magazalarBugunLfldeger)),

      //Internet
      InternetIsmi: this.state.data34.map((res100, Id) => res100.m_f),
      InternetTutar: this.state.data95.map((res132, Id) => res132.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")),
      InternetTutar2: this.state.data95.map((res200, Id) => res200.tutar.toFixed(0)),
      InternetLfldeger: this.state.data96.map((res133, Id) => res133.tutar.toFixed(0)),
      LflInternet: Math.abs(100 * ((this.state.InternetLfldeger - this.state.InternetTutar2) / this.state.InternetLfldeger)),

      //Yurtdisi
        YurtdisiIsmi: this.state.data50.map((res116, Id) => res116.m_f),
        YurtdisiTutar: this.state.data97.map((res117, Id) => res117.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")),
        YurtdisiTutar2: this.state.data97.map((res133, Id) => res133.tutar.toFixed(0)),
        yurtdisiLflTutar: this.state.data98.map((res118, Id) => res118.tutar.toFixed(0)),
        Lflyurtdisi: Math.abs(100 * ((this.state.yurtdisiLflTutar - this.state.YurtdisiTutar2) / this.state.yurtdisiLflTutar)),

        //Franchise
        FranchiseIsmi: this.state.data60.map((res110, Id) => res110.m_f),
        FranchiseTutar: this.state.data99.map((res119, Id) => res119.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")),
        FranchiseTutar2: this.state.data99.map((res143, Id) => res143.tutar.toFixed(0)),
        franchiselfldeger: this.state.data100.map((res120, Id) => res120.tutar.toFixed(0)),
        LflFranchise: Math.abs(100 * ((this.state.franchiselfldeger - this.state.FranchiseTutar2) / this.state.franchiselfldeger)),

        //Merkez franchise
        merkezFranchiseIsmi: this.state.data55.map((res124, Id) => res124.m_f),
        merkezFranchiseTutar: this.state.data101.map((res125, Id) => res125.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")),
        merkezFranchiseTutar2: this.state.data101.map((res144, Id) => res144.tutar.toFixed(0)),
        merkezFranchiselfldeger: this.state.data102.map((res126, Id) => res126.tutar.toFixed(0)),
        LflMerkezFranchise: Math.abs(100 * ((this.state.merkezFranchiselfldeger - this.state.merkezFranchiseTutar2) / this.state.merkezFranchiselfldeger)),
    })

  }
  _startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: -1,
      duration: 1700
      }).start(() => {
        Animated.timing(this.state.animation, {
          toValue: 1,
          duration: 1700,
          }).start();
        });
  }

  render() {
    const animatedStyles = {
      transform: [
      {
        scaleX: this.state.animation,
      }
      ]
    }
    const tutar = this.state.tutarlargosterim;
    const yon = this.props;

  const Container = styled.View`
  	background: #cccccc;
  	height: 80px;
  	width: 90px;
  	border-radius: 39px;
  	margin: 7px;
  	margin-top: 10px;
  	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);

  `;
  const Cover = styled.View`
	width: 100%;
	height: 9px;
	border-top-left-radius: 14px;
	border-top-right-radius: 14px;
	overflow: hidden;
`;

const Image = styled.Image`
	width: 100%;
	height: 100%;
`;

const Content = styled.View`
	padding-top: 10px;
	flex-direction: column;
	align-items: center;
	height: 60px;
`;

const Title = styled.Text`
	color: white;
	font-size:14px;
	font-weight: 600;
`;

const PriceCaption = styled.Text`
	color: white;
	font-size: 15px;
	font-weight: 600;
	margin-top: 4px;
`;
    return(

      <View style={styles.container}>

      <View>
      <View style={styles.buttonyil}>

      </View>

<View style={styles.cardstyle}>
<TouchableOpacity onPress={this._bugun}>
  <Container style={styles.one}>
		<Content>
			<Title></Title>
			<PriceCaption>
        <Image style={styles.imageContainer} source={require('../../assets/icons/bars.png')}/>
      </PriceCaption>
		</Content>
	</Container>
    <Text style={styles.textbugun}>Bugun</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={this._dun}>
  <Container style={styles.two}>
    <Content>
      <Title></Title>
      <PriceCaption>

        <Image style={styles.imageContainer2} source={require('../../assets/icons/logo.png')} />
      </PriceCaption>
    </Content>
  </Container>
    <Text style={styles.textdun}>Dun</Text>

  </TouchableOpacity>
    <TouchableOpacity onPress={this._gecenHafta}>
      <Container style={styles.three}>
        <Content>
          <Title></Title>
        <PriceCaption>
          <Image style={styles.imageContainer2} source={require('../../assets/icons/logo.png')} />
        </PriceCaption>
    </Content>
    </Container>
    <Text style={styles.textGecenHafta}>Gecen Hafta</Text>

  </TouchableOpacity>
    <TouchableOpacity onPress={this._gecenAy}>
      <Container style={styles.four}>
      <Content>
        <Title></Title>
          <PriceCaption>
          <Image style={styles.imageContainer2} source={require('../../assets/icons/orders.png')} />
          </PriceCaption>
      </Content>
      </Container>
      <Text style={styles.textGecenAy}>Gecen Ay</Text>

  </TouchableOpacity>
</View>
<View>
  <Text style={styles.textmagaza}>Satışlar</Text>
</View>

  <View style={styles.viewText}>
  <TouchableWithoutFeedback onPress={this._startAnimation}>
  <Animated.View style={animatedStyles}>
    <View style={styles.summerItem}>
        <Text style={styles.summerKey}>CIRO</Text>
          <Text style={styles.ortaText}>
            {this.state.tutarlargosterim}
            {
              this.state.tlcıkart === true ? 'TL' : ''
            }
        </Text>
    </View>
    </Animated.View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={this._startAnimation}>
    <Animated.View style={animatedStyles}>
      <View style={styles.summerItem}>
      <Text style={styles.summerKey}>CİFT</Text>
      <Text style={styles.ortaText}>
        {this.state.ciftgosterim}
      </Text>
    </View>
    </Animated.View>
    </TouchableWithoutFeedback>
    </View>

    <View style={styles.viewText2}>
    <TouchableWithoutFeedback onPress={this._startAnimation}>
    <Animated.View style={animatedStyles}>
  <View style={styles.summerItem}>
      <Text style={styles.summerKey}>ADET</Text>
      <Text style={styles.ortaText}>
      {this.state.tekgosterim}
      </Text>
    </View>
    </Animated.View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={this._startAnimation}>
    <Animated.View style={animatedStyles}>
    <View style={styles.summerItem}>
        <Text style={styles.summerKey}>DÖNÜŞÜM ORANI</Text>
        <Text style={styles.ortaText}>
        %49
        </Text>
      </View>
      </Animated.View>
      </TouchableWithoutFeedback>
  </View>

  </View>
  <View style={styles.lflbugun}>
    <Text style={styles.textmagaza}>Magaza Sıralaması</Text>

  </View>
    <ScrollView style={styles.inputContainer}>

  { this.state.defaultmagaza === 1 ?
      this.state.data39.map((res39, Id) =>
        this.state.data40.map((res40, Id) =>
      <Card1>
      <TouchableOpacity style={styles.space} onPress={()=> {
    yon.navigation.navigate('Magaza', {
      magazaId: res39.m_f,
      tutarId: res39.tutar,
    })
  }}>
      <Text style={styles.titleStyle}>1</Text>
      <Text style={styles.titleStyle}>{res39.m_f}</Text>
      <Text style={styles.titleStyle}>{res39.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
       <Text style={styles.textlfl}>
        {res39.tutar.toFixed(0) < res40.tutar.toFixed(0) ?
           <Text style={styles.kirmiziText}> % {Math.abs(100 * (res40.tutar.toFixed(2) - res39.tutar.toFixed(2)) / res40.tutar.toFixed(2)).toFixed(2)}
           <Image style={styles.imageContainer5} source={require('../../assets/icons/okeksi.png')} /> </Text>
        : <Text style={styles.textlfl2}> % {Math.abs(100 * (res40.tutar.toFixed(2) - res39.tutar.toFixed(2)) / res40.tutar.toFixed(2)).toFixed(2)}
        <Image style={styles.imageContainer6} source={require('../../assets/icons/yukariok.png')} /></Text> }
      </Text>
      </TouchableOpacity>
      </Card1>
      ))
     :
      this.state.data39.map((res39, Id) =>
      <Card1>
      <TouchableOpacity style={styles.space} onPress={()=> {
      yon.navigation.navigate('Magaza', {
      magazaId: res39.m_f,
      tutarId: res39.tutar,
      })
      }}>
      <Text style={styles.titleStyle}>1</Text>
      <Text style={styles.titleStyle}>{this.state.magazaIsmi}</Text>
      <Text style={styles.titleStyle}>{this.state.magazaTutar}TL</Text>
       <Text style={styles.textlfl}>
        {this.state.magazaTutar2 < this.state.magazalarBugunLfldeger ?
           <Text style={styles.kirmiziText}> % {this.state.bugunLflMagazalar.toFixed(2)}
           <Image style={styles.imageContainer5} source={require('../../assets/icons/okeksi.png')} /> </Text>
        : <Text style={styles.textlfl2}> % {this.state.bugunLflMagazalar.toFixed(2)}
        <Image style={styles.imageContainer6} source={require('../../assets/icons/yukariok.png')} /></Text> }
      </Text>
      </TouchableOpacity>
      </Card1>

        )
    }
    {
      this.state.defaultmagaza === 1 ?
          this.state.data34.map((res34, Id) =>
            this.state.data35.map((res35, Id) =>
          <Card1>
          <TouchableOpacity style={styles.space} onPress={()=> {
        yon.navigation.navigate('Internet', {
          magazaId: res34.m_f,
          tutarId: res34.tutar,
        })
      }}>
          <Text style={styles.titleStyle}>2</Text>
          <Text style={styles.titleStyle}>{res34.m_f}</Text>
          <Text style={styles.titleStyle}>{res34.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
           <Text style={styles.textlfl}>
            {res34.tutar.toFixed(0) < res35.tutar.toFixed(0) ?
               <Text style={styles.kirmiziText}> % {Math.abs(100 * (res35.tutar.toFixed(2) - res34.tutar.toFixed(2)) / res35.tutar.toFixed(2)).toFixed(2)}
               <Image style={styles.imageContainer5} source={require('../../assets/icons/okeksi.png')} /> </Text>
            : <Text style={styles.textlfl2}> % {Math.abs(100 * (res35.tutar.toFixed(2) - res34.tutar.toFixed(2)) / res35.tutar.toFixed(2)).toFixed(2)}
            <Image style={styles.imageContainer6} source={require('../../assets/icons/yukariok.png')} /></Text> }
          </Text>
          </TouchableOpacity>
          </Card1>
          ))
         :
          this.state.data34.map((res34, Id) =>
          <Card1>
          <TouchableOpacity style={styles.space} onPress={()=> {
          yon.navigation.navigate('Internet', {
          magazaId: res34.m_f,
          tutarId: res34.tutar,
          })
          }}>
          <Text style={styles.titleStyle}>2</Text>
          <Text style={styles.titleStyle}>{this.state.InternetIsmi}</Text>
          <Text style={styles.titleStyle}>{this.state.InternetTutar}TL</Text>
           <Text style={styles.textlfl}>
            {this.state.InternetTutar2 < this.state.InternetLfldeger ?
               <Text style={styles.kirmiziText}> % {this.state.LflInternet.toFixed(2)}
               <Image style={styles.imageContainer5} source={require('../../assets/icons/okeksi.png')} /> </Text>
            : <Text style={styles.textlfl2}> % {this.state.LflInternet.toFixed(2)}
            <Image style={styles.imageContainer6} source={require('../../assets/icons/yukariok.png')} /></Text> }
          </Text>
          </TouchableOpacity>
          </Card1>

            )
        }
        {
          this.state.defaultmagaza === 1 ?
              this.state.data50.map((res50, Id) =>
                this.state.data51.map((res51, Id) =>
              <Card1>
              <TouchableOpacity style={styles.space} onPress={()=> {
            yon.navigation.navigate('Yurtdisi', {
              magazaId: res50.m_f,
              tutarId: res50.tutar,
            })
          }}>
              <Text style={styles.titleStyle}>3</Text>
              <Text style={styles.titleStyle}>{res50.m_f}</Text>
              <Text style={styles.titleStyle}>{res50.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
               <Text style={styles.textlfl}>
                {res50.tutar.toFixed(0) < res51.tutar.toFixed(0) ?
                   <Text style={styles.kirmiziText}> % {Math.abs(100 * (res51.tutar.toFixed(2) - res50.tutar.toFixed(2)) / res51.tutar.toFixed(2)).toFixed(2)}
                   <Image style={styles.imageContainer5} source={require('../../assets/icons/okeksi.png')} /> </Text>
                : <Text style={styles.textlfl2}> % {Math.abs(100 * (res51.tutar.toFixed(2) - res50.tutar.toFixed(2)) / res51.tutar.toFixed(2)).toFixed(2)}
                <Image style={styles.imageContainer6} source={require('../../assets/icons/yukariok.png')} /></Text> }
              </Text>
              </TouchableOpacity>
              </Card1>
              ))
             :
              this.state.data50.map((res50, Id) =>
              <Card1>
              <TouchableOpacity style={styles.space} onPress={()=> {
              yon.navigation.navigate('Yurtdisi', {
              magazaId: res50.m_f,
              tutarId: res50.tutar,
              })
              }}>
              <Text style={styles.titleStyle}>3</Text>
              <Text style={styles.titleStyle}>{this.state.YurtdisiIsmi}</Text>
              <Text style={styles.titleStyle}>{this.state.YurtdisiTutar}TL</Text>
               <Text style={styles.textlfl}>
                {this.state.YurtdisiTutar2 < this.state.Yurtdisilfldeger ?
                   <Text style={styles.kirmiziText}> % {this.state.Lflyurtdisi.toFixed(2)}
                   <Image style={styles.imageContainer5} source={require('../../assets/icons/okeksi.png')} /> </Text>
                : <Text style={styles.textlfl2}> % {this.state.Lflyurtdisi.toFixed(2)}
                <Image style={styles.imageContainer6} source={require('../../assets/icons/yukariok.png')} /></Text> }
              </Text>
              </TouchableOpacity>
              </Card1>

                )
            }
            {
              this.state.defaultmagaza === 1 ?
                  this.state.data60.map((res60, Id) =>
                    this.state.data61.map((res61, Id) =>
                  <Card1>
                  <TouchableOpacity style={styles.space} onPress={()=> {
                yon.navigation.navigate('Franchise', {
                  magazaId: res60.m_f,
                  tutarId: res60.tutar,
                })
              }}>
                  <Text style={styles.titleStyle}>4</Text>
                  <Text style={styles.titleStyle}>{res60.m_f}</Text>
                  <Text style={styles.titleStyle}>{res60.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
                   <Text style={styles.textlfl}>
                    {res60.tutar.toFixed(0) < res61.tutar.toFixed(0) ?
                       <Text style={styles.kirmiziText}> % {Math.abs(100 * (res61.tutar.toFixed(2) - res60.tutar.toFixed(2)) / res61.tutar.toFixed(2)).toFixed(2)}
                       <Image style={styles.imageContainer5} source={require('../../assets/icons/okeksi.png')} /> </Text>
                    : <Text style={styles.textlfl2}> % {Math.abs(100 * (res61.tutar.toFixed(2) - res60.tutar.toFixed(2)) / res61.tutar.toFixed(2)).toFixed(2)}
                    <Image style={styles.imageContainer6} source={require('../../assets/icons/yukariok.png')} /></Text> }
                  </Text>
                  </TouchableOpacity>
                  </Card1>
                  ))
                 :
                  this.state.data60.map((res60, Id) =>
                  <Card1>
                  <TouchableOpacity style={styles.space} onPress={()=> {
                  yon.navigation.navigate('Franchise', {
                  magazaId: res60.m_f,
                  tutarId: res60.tutar,
                  })
                  }}>
                  <Text style={styles.titleStyle}>4</Text>
                  <Text style={styles.titleStyle}>{this.state.FranchiseIsmi}</Text>
                  <Text style={styles.titleStyle}>{this.state.FranchiseTutar}TL</Text>
                   <Text style={styles.textlfl}>
                    {this.state.FranchiseTutar2 < this.state.franchiselfldeger ?
                       <Text style={styles.kirmiziText}> % {this.state.LflFranchise.toFixed(2)}
                       <Image style={styles.imageContainer5} source={require('../../assets/icons/okeksi.png')} /> </Text>
                    : <Text style={styles.textlfl2}> % {this.state.LflFranchise.toFixed(2)}
                    <Image style={styles.imageContainer6} source={require('../../assets/icons/yukariok.png')} /></Text> }
                  </Text>
                  </TouchableOpacity>
                  </Card1>

                    )
                }

                {
                  this.state.defaultmagaza === 1 ?
                      this.state.data55.map((res55, Id) =>
                        this.state.data56.map((res56, Id) =>
                      <Card1>
                      <TouchableOpacity style={styles.space} onPress={()=> {
                    yon.navigation.navigate('MerkezFranchise', {
                      magazaId: res55.m_f,
                      tutarId: res55.tutar,
                    })
                  }}>
                      <Text style={styles.titleStyle}>5</Text>
                      <Text style={styles.titleStyle}>{res55.m_f}</Text>
                      <Text style={styles.titleStyle}>{res55.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
                       <Text style={styles.textlfl}>
                        {res55.tutar.toFixed(0) < res56.tutar.toFixed(0) ?
                           <Text style={styles.kirmiziText}> % {Math.abs(100 * (res56.tutar.toFixed(2) - res55.tutar.toFixed(2)) / res56.tutar.toFixed(2)).toFixed(2)}
                           <Image style={styles.imageContainer5} source={require('../../assets/icons/okeksi.png')} /> </Text>
                        : <Text style={styles.textlfl2}> % {Math.abs(100 * (res56.tutar.toFixed(2) - res55.tutar.toFixed(2)) / res56.tutar.toFixed(2)).toFixed(2)}
                        <Image style={styles.imageContainer6} source={require('../../assets/icons/yukariok.png')} /></Text> }
                      </Text>
                      </TouchableOpacity>
                      </Card1>
                      ))
                     :
                      this.state.data55.map((res55, Id) =>
                      <Card1>
                      <TouchableOpacity style={styles.space} onPress={()=> {
                      yon.navigation.navigate('MerkezFranchise', {
                      magazaId: res55.m_f,
                      tutarId: res55.tutar,
                      })
                      }}>
                      <Text style={styles.titleStyle}>5</Text>
                      <Text style={styles.titleStyle}>{this.state.merkezFranchiseIsmi}</Text>
                      <Text style={styles.titleStyle}>{this.state.merkezFranchiseTutar}TL</Text>
                       <Text style={styles.textlfl}>
                        {this.state.merkezFranchiseTutar2 < this.state.merkezFranchiselfldeger ?
                           <Text style={styles.kirmiziText}> % {this.state.LflMerkezFranchise.toFixed(2)}
                           <Image style={styles.imageContainer5} source={require('../../assets/icons/okeksi.png')} /> </Text>
                        : <Text style={styles.textlfl2}> % {this.state.LflMerkezFranchise.toFixed(2)}
                        <Image style={styles.imageContainer6} source={require('../../assets/icons/yukariok.png')} /></Text> }
                      </Text>
                      </TouchableOpacity>
                      </Card1>

                        )
                    }
    </ScrollView>
    </View>
    )
  }

}
const styles = StyleSheet.create({
  // titleStyle: {
  //  shadowColor: '#000000',
  //  shadowOpacity: 0.1,
  //  shadowRadius: 5,
    //backgroundColor: '#f7f7f7',
//    padding: 0,
  //  margin: 0,
  //  borderRadius: 3,
  //  elevation: 3,
  //  color: '#111111',
//    justifyContent: 'space-between',
  //  width: Dimensions.get('window').width / 2 - 10,
//  },
  titleStyle: {
  //  padding: 20,
    marginLeft: 5,
    padding: 3,
  //  borderRadius: 3,
    //elevation: 3,
    fontSize: 15,
    fontWeight: 'bold',
    //flexDirection: 'row',
  },
  kirmiziText:{
    alignItems:'flex-end',
  },
  titleStyle3:{
    marginLeft: 40,
    marginTop:0,
    fontSize: 20,
    marginRight:0,
    alignItems: 'flex-end',
    fontWeight: 'bold',
    color: 'red',
  },
  titleStyle4:{
    marginLeft: 70,
  },
  textlfl:{
    marginTop: 0,
    marginRight:0,
    marginLeft: 60,
    alignItems: 'flex-end',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  textlfl2: {
    marginTop:18,
    marginLeft:80,
    marginRight:0,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#008000',
    height:40,
    alignItems:'flex-end',
  },
  imageContainer5: {
    width: 30,
    height: 25,
    marginTop: 0,
  },
  imageContainer6: {
    height:20,
    width: 5,
    marginLeft:10,
  },
  lflbugun:{
    flexDirection: 'row',
  },
  imageContainer2: {
    height: 50,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
  //  backgroundColor: 'red'
},
  imageContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 0,
    height: 55,
    width: 25,
    marginLeft: 30,
    marginRight: 10,
    borderColor: '#464646',
  },
  imageContainer4:{
    backgroundColor: 'white',
  },
  textmagaza:{
    marginTop: 18,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',

  },
  viewText: {
    minHeight: 75,
    padding: 10,
    width:400,
    flexDirection:'row',
  },
  viewText2:{
    minHeight: 75,
    padding: 10,
    width:300,
    flexDirection:'row',
  },
  summerItem:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin:10,
    marginLeft:28,
    width: 155,
    borderRadius: 10,
    borderWidth: 1,
    minWidth: 120,
    borderColor:'#d6d6d6',
  },
  summerKey:{
    textAlign: 'center',
    color: '#b6b9bf',
    fontFamily: 'AppleSDGothicNeo-Regular',
  },
  ortaText:{
    fontSize: 18,
    color: '#3068CC',
    fontFamily: 'AppleSDGothicNeo-Regular',
  },
  pie: {
    height: 200,
    padding: 0,
    margin: 0,
  },
  grafik: {
    marginLeft: 60,
    marginTop:0,
    padding:0,
  },
  text1:{
    margin: 20,
  },
  one: {
    backgroundColor: '#5f65fc30'
  },
  two: {
    backgroundColor: '#ce93d8'
  },
  three: {
    backgroundColor: '#ff8a0230'
  },
  four: {
    backgroundColor: '#ffab91'
  },
  inputContainer:{
    height:315,
    marginTop: 25,
    //flexDirection: 'column',
  },

  space: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height:30,
  },
  card1: {
    width:10,
    marginLeft:10,
    marginTop:10,
    padding: 0,
    margin: 3,
    height:140,
    marginRight:10,
    backgroundColor:Colors.orange,
  },
  container: {
    backgroundColor: '#FFFFFF'
  },
  buttonyil: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   marginTop:5,
   marginBottom: 0,
   marginLeft:40,
   marginRight:40,
   alignItems: 'center',
 },
 onebutton:{
  borderWidth: 0,
},
twobutton: {
  borderWidth: 0,
},
threebutton:{
  borderWidth: 0,
},
  oneContainer:{
    paddingTop:40,
    marginBottom: 15,
    width:500,
    marginLeft:30,
    flexDirection: 'row',
    height:180,
  },
  cardstyle: {
    flexDirection: 'row',
    marginTop:0,
  },
  textbugun:{
    marginLeft: 30
  },
  textdun:{
    marginLeft: 40
  },
  textGecenHafta: {
    marginLeft: 10
  },
  textGecenAy:{
    marginLeft: 20,
  }
});
export default Home;
