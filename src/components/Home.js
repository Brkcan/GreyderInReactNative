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
    data200:[],
    data201:[],
    data202:[],
    yurtdısıgecenay:[],
    gecenhaftayurtdısı:[],
    endunciftsatis:[],
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
    yurtdısıtoplam:[],
    yurtdısıToplamDeger:0,
    tutarlargosterim2:0,
    tutarlargosterim: 0,
    ciftgosterim: null,
    tekgosterim:null,
    Lflyurtdisi: 0,
    LflInternet:0,
    bugunLflMagazalar: 0,
    LflFranchise: 0,
    LflMerkezFranchise:0,
    tumMagazalarLfl:[],
    tumMagazalarLflDun:[],
    tumMagazalarLflGecenAy:[],
    tlcıkart: false,
    tumMagazalarLflGecenHafta:[],
    animation: new Animated.Value(1),
  }

  async componentDidMount() {
    await axios
      .get('http://localhost:8080/api/gettummagazalartoplam/all')
      .then(res103 => this.setState({
      tumMagazalarLfl: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/getgecenaytummagazalartoplam/all')
      .then(res103 => this.setState({
      tumMagazalarLflGecenAy: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/getgecenhaftatummagazalartoplam/all')
      .then(res103 => this.setState({
      tumMagazalarLflGecenHafta: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/getduntummagazalartoplam/all')
      .then(res103 => this.setState({
      tumMagazalarLflDun: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/getduncirotoplam/all')
      .then(res103 => this.setState({
      data103: res103.data,
    }))
    await axios
      .get('http://localhost:8080/api/getbuguncirotoplam/all')
      .then(res200 => this.setState({
      data200: res200.data,
    }))

    await axios
      .get('http://localhost:8080/api/getgecenhaftatoplamsiralama/all')
      .then(res201 => this.setState({
      data201: res201.data,
    }))
    await axios
      .get('http://localhost:8080/api/getgecenaytoplamsiralama/all')
      .then(res202 => this.setState({
      data202: res202.data,
    }))
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
     .get('http://localhost:8080/api/getgecenhaftatoplam/all')
     .then(res4 => this.setState({
     data4: res4.data,
   }))
   await axios
     .get('http://localhost:8080/api/getgecenhaftayurtdısıtoplam/all')
     .then(res4 => this.setState({
     gecenhaftayurtdısı: res4.data,
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
     .get('http://localhost:8080/api/getgecenaytoplamciro/all')
     .then(res90 => this.setState({
     data90: res90.data,
   }))
   await axios
     .get('http://localhost:8080/api/getgecenayyurtdısıtoplam/all')
     .then(res90 => this.setState({
     yurtdısıgecenay: res90.data,
   }))
   await axios
     .get('http://localhost:8080/api/enduntoplam/all')
     .then(res103 => this.setState({
     data3: res103.data,
   }))
   await axios
     .get('http://localhost:8080/api/endunyurtdısıtoplam/all')
     .then(res103 => this.setState({
     yurtdısıtoplam: res103.data,
   }))
   await axios
     .get('http://localhost:8080/api/enduntekadetsiralamasi/all')
     .then(res103 => this.setState({
     data31: res103.data,
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
     .get('http://localhost:8080/api/getdunciftsatis/all')
   .then(res39 => this.setState({
     data30: res39.data,
   }))

  }
  _bugun = () => {
    this.setState({
      defaultmagaza: 1,

      ciftgosterim: this.state.data10.map((res5, Id) => res5.miktar),
      tekgosterim: this.state.data11.map((res6, Id) => res6.miktar),


    })

       console.log("bugune basıldı");
}
  _dun = () => {
    this.setState({
      defaultmagaza: 2,

      ciftgosterim: this.state.data30.map((res5, Id) => res5.miktar),
      tekgosterim: this.state.data31.map((res6, Id) => res6.miktar),

    })

  }
  _gecenHafta = () => {
    this.setState({
      defaultmagaza: 3,

      ciftgosterim: this.state.data32.map((res5, Id) => res5.miktar),
      tekgosterim: this.state.data33.map((res6, Id) => res6.miktar),

    })
  }

  _gecenAy = () => {
    this.setState({
      defaultmagaza: 4,

      ciftgosterim: this.state.data92.map((res5, Id) => res5.miktar),
      tekgosterim: this.state.data91.map((res6, Id) => res6.miktar),

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
  	width: 85px;
  	border-radius: 39px;
  	margin: 7px;
  	margin-top: 10px;
    marginRight:9px;
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
            {
              this.state.defaultmagaza === 2 ?
                this.state.data3.map((res10, Id) =>
                  this.state.yurtdısıtoplam.map((res11, Id) =>
                    <Text>{(res10.tutar + res11.tutar).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
                )) :
                this.state.defaultmagaza === 1 ?
                  this.state.data2.map((res12, Id) =>
                    <Text>{res12.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
                ) :
                this.state.defaultmagaza === 3 ?
                  this.state.data4.map((res13, Id) =>
                    this.state.gecenhaftayurtdısı.map((res14, Id) =>
                     <Text>{(res13.tutar + res14.tutar).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
                )) :
                this.state.defaultmagaza === 4 ?
                    this.state.data90.map((res14, Id) =>
                    this.state.yurtdısıgecenay.map((res15, Id) =>
                      <Text>{(res14.tutar + res15.tutar).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
                )) : ''
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
  {
    this.state.defaultmagaza === 1 ?
      this.state.data200.map((res200, Id) =>
      <Card1>
      {
        this.state.tumMagazalarLfl.map((res104,Id) =>

               res200.m_f === 'MAGAZA' && res104.m_f === 'MAGAZA' ?

            <TouchableOpacity style={styles.space} onPress={()=> {
                  yon.navigation.navigate('Magaza', {
                  })
                }}>

            <Text style={styles.titleStyle}>{res200.m_f}</Text>
            <Text style={styles.titleStyle22}>{res200.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
            <Text style={styles.textlfl}>
            {res200.tutar < res104.tutar ?

                  <Text style={styles.kirmiziText}> % {Math.abs(100 * (res104.tutar - res200.tutar) / res104.tutar ).toFixed(2)}</Text>
               : <Text style={styles.textlfl2}> % {Math.abs(100 * (res104.tutar - res200.tutar) / res104.tutar ).toFixed(2)}</Text>
             } </Text>

               </TouchableOpacity>

             : res200.m_f === 'INTERNET' && res104.m_f === 'INTERNET'?

             <TouchableOpacity style={styles.space} onPress={()=> {
                   yon.navigation.navigate('Internet', {
                   })
                 }}>

                 <Text style={styles.titleStyle}>{res200.m_f}</Text>
                 <Text style={styles.titleStyle22}>{res200.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
             <Text style={styles.textlfl}>
             {res200.tutar < res104.tutar ?
               <Text style={styles.kirmiziText}> % {Math.abs(100 * (res104.tutar - res200.tutar) / res104.tutar ).toFixed(2)}</Text>
              :  <Text style={styles.textlfl2}> % {Math.abs(100 * (res104.tutar - res200.tutar) / res104.tutar ).toFixed(2)}</Text>
              }
              </Text>

               </TouchableOpacity>

             : res200.m_f === 'YURTDISI' && res104.m_f === 'YURTDISI'?

             <TouchableOpacity style={styles.space} onPress={()=> {
                   yon.navigation.navigate('Yurtdisi', {
                   })
                 }}>

                 <Text style={styles.titleStyle}>{res200.m_f}</Text>
                 <Text style={styles.titleStyle2233}>{ (1.38 * res200.tutar).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
                 <Text style={styles.textlfl}>
                 {res200.tutar < res104.tutar ?
                   <Text style={styles.kirmiziText}> % {Math.abs(100 * (res104.tutar - res200.tutar) / res104.tutar ).toFixed(2)}</Text>
                  :  <Text style={styles.textlfl2}> % {Math.abs(100 * (res104.tutar - res200.tutar) / res104.tutar ).toFixed(2)}</Text>
                 }
                 </Text>

             </TouchableOpacity>

             : res200.m_f === 'FRANCHISE' && res104.m_f === 'FRANCHISE'?

             <TouchableOpacity style={styles.space} onPress={()=> {
                   yon.navigation.navigate('Franchise', {
                   })
                 }}>

                 <Text style={styles.titleStyle}>{res200.m_f}</Text>
                 <Text style={styles.titleStyle22}>{res200.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
                 <Text style={styles.textlfl}>
                 {res200.tutar < res104.tutar ?
                   <Text style={styles.kirmiziText}> % {Math.abs(100 * (res104.tutar - res200.tutar) / res104.tutar ).toFixed(2)}</Text>
                  :  <Text style={styles.textlfl2}> % {Math.abs(100 * (res104.tutar - res200.tutar) / res104.tutar ).toFixed(2)}</Text>
                 }
                 </Text>

             </TouchableOpacity>

             : res200.m_f === 'MERKEZ FRANCHISE' && res104.m_f === 'MERKEZ FRANCHISE' ?
             <TouchableOpacity style={styles.space} onPress={()=> {
                   yon.navigation.navigate('MerkezFranchise', {
                   })
                 }}>

                 <Text style={styles.titleStyle}>{res200.m_f}</Text>
                 <Text style={styles.titleStyle22}>{res200.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
                 <Text style={styles.textlfl23}>
                  {res200.tutar < res104.tutar ?
                    <Text style={styles.textlfl23}> % {Math.abs(100 * (res104.tutar - res200.tutar) / res104.tutar ).toFixed(2)}</Text>
                   :  <Text style={styles.textlfl22}> % {Math.abs(100 * (res104.tutar - res200.tutar) / res104.tutar ).toFixed(2)}</Text>
                  }
                 </Text>

             </TouchableOpacity> : <Text></Text>


    )}</Card1>) :
    this.state.defaultmagaza === 2 ?
      this.state.data103.map((res103, Id) =>
      <Card1>
      {
        this.state.tumMagazalarLflDun.map((res104, Id) =>


             res103.m_f === 'MAGAZA' && res104.m_f === 'MAGAZA' ?

          <TouchableOpacity style={styles.space} onPress={()=> {
                yon.navigation.navigate('Magaza', {
                })
              }}>
              <Text style={styles.titleStyle}>{res103.m_f}</Text>
              <Text style={styles.titleStyle22}>{res103.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
           <Text style={styles.textlfl}>
          {res103.tutar < res104.tutar ?

                <Text style={styles.kirmiziText}> % {Math.abs(100 * (res104.tutar - res103.tutar) / res104.tutar ).toFixed(2)}</Text>
             : <Text style={styles.textlfl2}> % {Math.abs(100 * (res104.tutar - res103.tutar) / res104.tutar ).toFixed(2)}</Text>} </Text>
             </TouchableOpacity>

           : res103.m_f === 'INTERNET' && res104.m_f === 'INTERNET'  ?

           <TouchableOpacity style={styles.space} onPress={()=> {
                 yon.navigation.navigate('Internet', {
                 })
               }}>
               <Text style={styles.titleStyle}>{res103.m_f}</Text>
               <Text style={styles.titleStyle22}>{res103.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
           <Text style={styles.textlfl}>
           {res103.tutar < res104.tutar ?
             <Text style={styles.kirmiziText}> % {Math.abs(100 * (res104.tutar - res103.tutar) / res104.tutar ).toFixed(2)}</Text>
            :  <Text style={styles.textlfl2}> % {Math.abs(100 * (res104.tutar - res103.tutar) / res104.tutar ).toFixed(2)}</Text>
            }
            </Text>
             </TouchableOpacity>

           : res103.m_f === 'YURTDISI' && res104.m_f === 'YURTDISI' ?

           <TouchableOpacity style={styles.space} onPress={()=> {
                 yon.navigation.navigate('Yurtdisi', {
                 })
               }}>
               <Text style={styles.titleStyle}>{res103.m_f}</Text>
               <Text style={styles.titleStyle22}>{ (1.38 * res103.tutar).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
               <Text style={styles.textlfl}>
               {res103.tutar < res104.tutar ?
                 <Text style={styles.kirmiziText}> % {Math.abs(100 * (res104.tutar - res103.tutar) / res104.tutar ).toFixed(2)}</Text>
                :  <Text style={styles.textlfl2}> % {Math.abs(100 * (res104.tutar - res103.tutar) / res104.tutar ).toFixed(2)}</Text>
               }
               </Text>
           </TouchableOpacity>

           : res103.m_f === 'FRANCHISE' && res104.m_f === 'FRANCHISE' ?

           <TouchableOpacity style={styles.space} onPress={()=> {
                 yon.navigation.navigate('Franchise', {
                 })
               }}>
               <Text style={styles.titleStyle}>{res103.m_f}</Text>
               <Text style={styles.titleStyle22}>{res103.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
               <Text style={styles.textlfl}>
               {res103.tutar < res104.tutar ?
                 <Text style={styles.kirmiziText}> % {Math.abs(100 * (res104.tutar - res103.tutar) / res104.tutar ).toFixed(2)}</Text>
                :  <Text style={styles.textlfl2}> % {Math.abs(100 * (res104.tutar - res103.tutar) / res104.tutar ).toFixed(2)}</Text>
               }
               </Text>
           </TouchableOpacity>

           : res103.m_f === 'MERKEZ FRANCHISE' && res104.m_f === 'MERKEZ FRANCHISE' ?

           <TouchableOpacity style={styles.space} onPress={()=> {
                 yon.navigation.navigate('MerkezFranchise', {
                 })
               }}>
               <Text style={styles.titleStyle}>{res103.m_f}</Text>
               <Text style={styles.titleStyle22}>{res103.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
               <Text style={styles.textlfl23}>
                {res103.tutar < res104.tutar ?
                  <Text style={styles.textlfl23}> % {Math.abs(100 * (res104.tutar - res103.tutar) / res104.tutar ).toFixed(2)}</Text>
                 :  <Text style={styles.textlfl22}> % {Math.abs(100 * (res104.tutar - res103.tutar) / res104.tutar ).toFixed(2)}</Text>
                }
               </Text>
           </TouchableOpacity> : <Text></Text>

    )}</Card1>) :
    this.state.defaultmagaza === 3 ?
      this.state.data201.map((res201 ,Id) =>
      <Card1>
      {
        this.state.tumMagazalarLflGecenHafta.map((res104, Id) =>

          res201.m_f === 'MAGAZA' && res104.m_f === 'MAGAZA' ?

          <TouchableOpacity style={styles.space} onPress={()=> {
                yon.navigation.navigate('Magaza', {
                })
              }}>
              <Text style={styles.titleStyle}>{res201.m_f}</Text>
              <Text style={styles.titleStyle22}>{res201.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
           <Text style={styles.textlfl}>
          {res201.tutar < res104.tutar ?

                <Text style={styles.kirmiziText}> % {Math.abs(100 * (res104.tutar - res201.tutar) / res104.tutar ).toFixed(2)}</Text>
             : <Text style={styles.textlfl2}> % {Math.abs(100 * (res104.tutar - res201.tutar) / res104.tutar ).toFixed(2)}</Text>} </Text>

             </TouchableOpacity>

           : res201.m_f === 'INTERNET' && res104.m_f === 'INTERNET' ?

           <TouchableOpacity style={styles.space} onPress={()=> {
                 yon.navigation.navigate('Internet', {
                 })
               }}>
               <Text style={styles.titleStyle}>{res201.m_f}</Text>
               <Text style={styles.titleStyle22}>{res201.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
           <Text style={styles.textlfl}>
           {res201.tutar < res104.tutar ?
             <Text style={styles.kirmiziText}> % {Math.abs(100 * (res104.tutar - res201.tutar) / res104.tutar ).toFixed(2)}</Text>
            :  <Text style={styles.textlfl2}> % {Math.abs(100 * (res104.tutar - res201.tutar) / res104.tutar ).toFixed(2)}</Text>
            }
            </Text>
             </TouchableOpacity>

           : res201.m_f === 'YURTDISI' && res104.m_f === 'YURTDISI' ?

           <TouchableOpacity style={styles.space} onPress={()=> {
                 yon.navigation.navigate('Yurtdisi', {
                 })
               }}>
               <Text style={styles.titleStyle}>{res201.m_f}</Text>
               <Text style={styles.titleStyle22}>{ (1.38 * res201.tutar).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
               <Text style={styles.textlfl}>
               {res201.tutar < res104.tutar ?
                 <Text style={styles.kirmiziText}> % {Math.abs(100 * (res104.tutar - res201.tutar) / res104.tutar ).toFixed(2)}</Text>
                :  <Text style={styles.textlfl2}> % {Math.abs(100 * (res104.tutar - res201.tutar) / res104.tutar ).toFixed(2)}</Text>
               }
               </Text>
           </TouchableOpacity>

           : res201.m_f === 'FRANCHISE' && res104.m_f === 'FRANCHISE' ?

           <TouchableOpacity style={styles.space} onPress={()=> {
                 yon.navigation.navigate('Franchise', {
                 })
               }}>
               <Text style={styles.titleStyle}>{res201.m_f}</Text>
               <Text style={styles.titleStyle22}>{res201.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
               <Text style={styles.textlfl}>
               {res201.tutar < res104.tutar ?
                 <Text style={styles.kirmiziText}> % {Math.abs(100 * (res104.tutar - res201.tutar) / res104.tutar ).toFixed(2)}</Text>
                :  <Text style={styles.textlfl2}> % {Math.abs(100 * (res104.tutar - res201.tutar) / res104.tutar ).toFixed(2)}</Text>
               }
               </Text>
           </TouchableOpacity>

           : res201.m_f === 'MERKEZ FRANCHISE' && res104.m_f === 'MERKEZ FRANCHISE' ?

           <TouchableOpacity style={styles.space} onPress={()=> {
                 yon.navigation.navigate('MerkezFranchise', {
                 })
               }}>
               <Text style={styles.titleStyle}>{res201.m_f}</Text>
               <Text style={styles.titleStyle22}>{res201.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
               <Text style={styles.textlfl23}>
                {res201.tutar < res104.tutar ?
                  <Text style={styles.textlfl23}> % {Math.abs(100 * (res104.tutar - res201.tutar) / res104.tutar ).toFixed(2)}</Text>
                 :  <Text style={styles.textlfl22}> % {Math.abs(100 * (res104.tutar - res201.tutar) / res104.tutar ).toFixed(2)}</Text>
                }
               </Text>
           </TouchableOpacity>  : <Text></Text>

      )}</Card1>) :
    this.state.defaultmagaza === 4 ?
      this.state.data202.map((res202, Id) =>
      <Card1>
      {
        this.state.tumMagazalarLflGecenAy.map((res104, Id) =>

           res202.m_f === 'MAGAZA' && res104.m_f === 'MAGAZA' ?

          <TouchableOpacity style={styles.space} onPress={()=> {
                yon.navigation.navigate('Magaza', {
                })
              }}>
              <Text style={styles.titleStyle}>{res202.m_f}</Text>
              <Text style={styles.titleStyle22}>{res202.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
           <Text style={styles.textlfl}>
          {res202.tutar < res104.tutar ?

                <Text style={styles.kirmiziText}> % {Math.abs(100 * (res104.tutar - res202.tutar) / res104.tutar ).toFixed(2)}</Text>
             : <Text style={styles.textlfl2}> % {Math.abs(100 * (res104.tutar - res202.tutar) / res104.tutar ).toFixed(2)}</Text>} </Text>
             </TouchableOpacity>

           : res202.m_f === 'INTERNET' && res104.m_f === 'INTERNET' ?

           <TouchableOpacity style={styles.space} onPress={()=> {
                 yon.navigation.navigate('Internet', {
                 })
               }}>
               <Text style={styles.titleStyle}>{res202.m_f}</Text>
               <Text style={styles.titleStyle22}>{res202.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
           <Text style={styles.textlfl}>
           {res202.tutar < res104.tutar ?
             <Text style={styles.kirmiziText}> % {Math.abs(100 * (res104.tutar - res202.tutar) / res104.tutar ).toFixed(2)}</Text>
            :  <Text style={styles.textlfl2}> % {Math.abs(100 * (res104.tutar - res202.tutar) / res104.tutar ).toFixed(2)}</Text>
            }
            </Text>
             </TouchableOpacity>

           : res202.m_f === 'YURTDISI' && res104.m_f === 'YURTDISI' ?

           <TouchableOpacity style={styles.space} onPress={()=> {
                 yon.navigation.navigate('Yurtdisi', {
                 })
               }}>
               <Text style={styles.titleStyle}>{res202.m_f}</Text>
               <Text style={styles.titleStyle22}>{ (1.38 * res202.tutar).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
               <Text style={styles.textlfl}>
               {res202.tutar < res104.tutar ?
                 <Text style={styles.kirmiziText}> % {Math.abs(100 * (res104.tutar - res202.tutar) / res104.tutar ).toFixed(2)}</Text>
                :  <Text style={styles.textlfl2}> % {Math.abs(100 * (res104.tutar - res202.tutar) / res104.tutar ).toFixed(2)}</Text>
               }
               </Text>
           </TouchableOpacity>

           : res202.m_f === 'FRANCHISE' && res104.m_f === 'FRANCHISE' ?

           <TouchableOpacity style={styles.space} onPress={()=> {
                 yon.navigation.navigate('Franchise', {
                 })
               }}>
               <Text style={styles.titleStyle}>{res202.m_f}</Text>
               <Text style={styles.titleStyle22}>{res202.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
               <Text style={styles.textlfl}>
               {res202.tutar < res104.tutar ?
                 <Text style={styles.kirmiziText}> % {Math.abs(100 * (res104.tutar - res202.tutar) / res104.tutar ).toFixed(2)}</Text>
                :  <Text style={styles.textlfl2}> % {Math.abs(100 * (res104.tutar - res202.tutar) / res104.tutar ).toFixed(2)}</Text>
               }
               </Text>
           </TouchableOpacity>

           : res202.m_f === 'MERKEZ FRANCHISE' && res104.m_f === 'MERKEZ FRANCHISE' ?

           <TouchableOpacity style={styles.space} onPress={()=> {
                 yon.navigation.navigate('MerkezFranchise', {
                 })
               }}>
               <Text style={styles.titleStyle}>{res202.m_f}</Text>
               <Text style={styles.titleStyle224}>{res202.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
               <Text style={styles.textlfl23}>
                {res202.tutar < res104.tutar ?
                  <Text style={styles.textlfl23}> % {Math.abs(100 * (res104.tutar - res202.tutar) / res104.tutar ).toFixed(2)}</Text>
                 :  <Text style={styles.textlfl22}> % {Math.abs(100 * (res104.tutar - res202.tutar) / res104.tutar ).toFixed(2)}</Text>
                }
               </Text>
           </TouchableOpacity>: <Text></Text>

      )}</Card1>) : <Text>başarılı</Text>
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
    marginLeft: 3,
    padding: 3,
  //  borderRadius: 3,
    //elevation: 3,
    fontSize: 15,
    fontWeight: 'bold',
    //flexDirection: 'row',
  },
titleStyle2233:{
  marginLeft:40,
  marginRight:20,
  fontSize: 15,
  fontWeight: 'bold',
  },
  titleStyle22:{
    marginLeft:20,
    marginRight:20,
    fontSize: 15,
    fontWeight: 'bold',
  },
  titleStyle224:{
    marginLeft:10,
    marginRight:10,
    fontSize: 15,
    fontWeight: 'bold',
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
    marginRight:5,
    marginLeft: 60,
    alignItems: 'flex-end',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  textlfl22:{
    marginTop:0,
    padding:0,
    marginLeft:5,
    marginRight:5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#008000',
    height:40,
    alignItems:'flex-end',
  },
  textlfl23:{
    marginTop:0,
    marginLeft:5,
    marginRight:5,
    padding:0,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
    height:40,
    alignItems:'flex-end',
  },
  textlfl2: {
    marginTop:18,
    marginLeft:100,
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
    height:330,
    marginTop: 0,
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
