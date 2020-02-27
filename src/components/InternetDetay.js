import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {Colors} from './Colors';
import Card1 from './Card1';
import axios from 'axios';
import styled from 'styled-components';
import FlipCard from 'react-native-flip-card'

class InternetDetay extends Component{

  state = {
    data39:[],
    data40:[],
    data41:[],
    data42:[],
    data43:[],
    data44:[],
    counter: 0,
    defaultmagaza:1,
  }
    async componentDidMount() {
      await axios
        .get('http://localhost:8080/api/getbugunkuinternetsiralamasi/all')
      .then(res39 => this.setState({
        data39: res39.data,
        counter: this.state.counter,
      }))
      await axios
        .get('http://localhost:8080/api/getbuguninternetsiralamasi/all')
      .then(res39 => this.setState({
        data40: res39.data,
        counter: 0,
      }))
      await axios
        .get('http://localhost:8080/api/getbuguninternetcifttekoran/all')
      .then(res39 => this.setState({
        data41: res39.data,
        counter: 0,
      }))
      await axios
        .get('http://localhost:8080/api/getduninternetsiralamasi/all')
      .then(res39 => this.setState({
        data42: res39.data,
        counter: 0,
      }))
      await axios
        .get('http://localhost:8080/api/getgecenhaftainternetsiralamasioran/all')
      .then(res39 => this.setState({
        data43: res39.data,
        counter: 0,
      }))
      await axios
        .get('http://localhost:8080/api/getgecenayinternetsiralamasioran/all')
      .then(res39 => this.setState({
        data44: res39.data,
        counter: 0,
      }))
    }

    _bugun = () => {
      this.setState({
        defaultmagaza: 1,
        counter: 0,
      })

    }

    _dun = () => {
      this.setState({
        defaultmagaza: 2,
        counter: 0,
      })

    }

    _gecenHafta = () => {
      this.setState({
        defaultmagaza: 3,
        counter: 0,
      })
    }

    _gecenAy = () => {
      this.setState({
        defaultmagaza: 4,
        counter: 0,
      })

    }

  render(){
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
    const yon = this.props;
    const magaza = yon.navigation.getParam('magazaId');
    const tutar = yon.navigation.getParam('tutarId');
    return (
            <View style={styles.container}>
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
              <Text style={styles.textmagaza2}>Satışlar</Text>
            </View>
            <View style={styles.flip}>
          <FlipCard>
          <View style={styles.card}>
            <Text style={styles.summerKey}>
            <Text>Internet toplam</Text>
            </Text>
            <Text style={styles.ortaText}>
            {
              this.state.data40.map((res10, Id) =>

                <Text>{res10.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
              )
            }
            </Text>
            </View>
            <View style={styles.card}>
            <Text style={styles.summerKey}>
            ARKA
            </Text>
            <Text style={styles.ortaText}>
            %99
            </Text>
            </View>
            </FlipCard>

            <FlipCard>
         <View style={styles.card}>
         <Text style={styles.summerKey}>
         <Text>Çift toplam</Text>
         </Text>
         <Text style={styles.ortaText}>
         {
           this.state.data41.map((res10, Id) =>
            res10.urun_olcu_birim === 'CF' ?
            <Text>{res10.miktar}</Text> : <Text></Text>
           )
         }
         </Text>
         </View>
        <View style={styles.card}>
        <Text style={styles.summerKey}>
          ARKA
          </Text>
          <Text style={styles.ortaText}>
          %99
          </Text>
          </View>
          </FlipCard>
          </View>

          <View style={styles.flip}>
        <FlipCard>
        <View style={styles.card}>
          <Text style={styles.summerKey}>
          <Text>tek toplam</Text>
          </Text>
          <Text style={styles.ortaText}>
          {
            this.state.data41.map((res10, Id) =>
             res10.urun_olcu_birim === 'AD' ?
             <Text>{res10.miktar}</Text> : <Text></Text>
            )
          }
          </Text>
          </View>
          <View style={styles.card}>
          <Text style={styles.summerKey}>
          ARKA
          </Text>
          <Text style={styles.ortaText}>
          %99
          </Text>
          </View>
          </FlipCard>

          <FlipCard>
       <View style={styles.card}>
       <Text style={styles.summerKey}>
       AB
       </Text>
       <Text style={styles.ortaText}>
       %49
       </Text>
       </View>
      <View style={styles.card}>
      <Text style={styles.summerKey}>
        ARKA
        </Text>
        <Text style={styles.ortaText}>
        %99
        </Text>
        </View>
        </FlipCard>
        </View>
            <Text style={styles.textmagaza}>Magaza Sıralaması</Text>

              <ScrollView style={styles.inputContainer}>
              {
                this.state.defaultmagaza === 1 ?
                  this.state.data39.map((res, Id) =>
                    <Card1>

                    <Text style={styles.titleStyle}>{this.state.counter = this.state.counter + 1}</Text>
                    <Text style={styles.titleStyle}>{res.unvan}</Text>
                    <Text style={styles.titleStyle}>{res.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
                    </Card1>
                  ) :
                  this.state.defaultmagaza === 2 ?
                    this.state.data42.map((res1, Id) =>
                      <Card1>

                      <Text style={styles.titleStyle}>{this.state.counter = this.state.counter + 1}</Text>
                      <Text style={styles.titleStyle}>{res1.unvan}</Text>
                      <Text style={styles.titleStyle}>{res1.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
                      </Card1>
                    ) :
                    this.state.defaultmagaza === 3 ?
                      this.state.data43.map((res, Id) =>
                        <Card1>

                        <Text style={styles.titleStyle}>{this.state.counter = this.state.counter + 1}</Text>
                        <Text style={styles.titleStyle}>{res.unvan}</Text>
                        <Text style={styles.titleStyle}>{res.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
                        </Card1>
                      ) :
                      this.state.defaultmagaza === 4 ?
                        this.state.data44.map((res, Id) =>
                          <Card1>

                          <Text style={styles.titleStyle}>{this.state.counter = this.state.counter + 1}</Text>
                          <Text style={styles.titleStyle}>{res.unvan}</Text>
                          <Text style={styles.titleStyle}>{res.tutar.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}TL</Text>
                          </Card1>
                        ) : <Text></Text>
              }
              </ScrollView>
            </View>

          )
        }
      }

      const styles = StyleSheet.create({
        container: {
          backgroundColor: '#FFFFFF'
        },
        cardContainer: {
          minHeight: 75,
          padding: 10,
          width:350,
          flexDirection:'row',
        },
        flip:{
          height:50,
          flexDirection:'row',
          marginTop:15,
        },
        ortaText: {
          fontSize: 18,
          color: '#3068CC',
          fontFamily: 'AppleSDGothicNeo-Regular',
        },
        card:{
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          margin:10,
          marginLeft:20,
          width: 165,
          height:60,
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
        cardsdizayn:{
          minHeight: 75,
          padding: 10,
          width:300,
          flexDirection:'row',
        },
        textmagaza:{
          marginTop: 75,
          marginLeft: 20,
          fontSize: 20,
          fontWeight: 'bold',

        },
        textmagaza2:{
          marginTop:30,
          marginLeft:20,
          fontSize:20,
          fontWeight:'bold',
        },
        charts:{
          marginLeft:0,
          width: 450,
          height:250,
          marginTop:20,
        },
        titleStyle: {
          //  padding: 20,
            marginLeft: 5,
            padding: 3,
          //  borderRadius: 3,
            //elevation: 3,
            fontSize: 15,
            fontWeight: 'bold',
            //flexDirection: 'row',
        },
        inputContainer:{
          height:395,
          marginTop: 15,
          //flexDirection: 'row',
        },
        cardstyle: {
          flexDirection: 'row',
          marginTop:0,
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
        textbugun:{
          marginLeft: 30
        },
        textdun:{
          marginLeft: 37
        },
        textGecenHafta: {
          marginLeft: 10
        },
        textGecenAy:{
          marginLeft: 20,
        }
      });

export default InternetDetay;
