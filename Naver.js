/**
 * Created by chocho on 5/25/17.
 */
import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    DrawerLayoutAndroid,
    Dimensions,
    TouchableWithoutFeedback,
    Image,
    WebView,
} from 'react-native';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import NaverTabBar from './NaverTabBar';
let WIDTH = Dimensions.get('window').width;

class GridIcon extends React.PureComponent {
    render() {
        return (
            <View style={{
                flex: 1, height: 80, backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#DFDFDF'
            }}>
                <TouchableWithoutFeedback
                    onPress={() => this.refs['DRAWER_REF'].closeDrawer()}
                    style={{flex: 1, height: 80, backgroundColor: 'white'}}
                >
                    <View style={{ flex:1, flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'}}>
                        <Image
                            style={{width: 37, height: 37}}
                            source={ this.props.icon }
                        />
                        <Text>
                            {this.props.name}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>

        )
    }
}
export default class Naver extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        var navigationView = (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View
                    style={{ height: 70, flexDirection: 'row',
                        backgroundColor: '#16C643', alignItems: 'center',
                        padding: 20 }}
                >
                    <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Image
                            style={{ width: 42, height: 42, }}
                            source={ require('./img/icon_profile.png')}
                        />
                        <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10, justifyContent: 'center' }}>
                            <Text style={{ color: 'white' }}>React Native</Text>
                            <Text style={{ color: 'white', fontSize: 11 }}>react@facebook.com</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end',}}>
                        <TouchableWithoutFeedback
                            onPress={() => this.refs['DRAWER_REF'].closeDrawer()}
                            style={{ flex: 1,  width: 20, height: 20,}}
                        >
                            <Image
                                style={{ width: 20, height: 20 }}
                                source={ require('./img/icon_x.png') }
                            />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <View
                    style={{ backgroundColor: '#FAFAFA', flex: 1, flexDirection: 'row',
                        paddingTop: 5
                    }}
                >
                    <GridIcon icon={ require('./img/ic_naver_mail.png')} name="메일" />
                    <GridIcon icon={ require('./img/ic_naver_cafe.png')} name="카페" />
                    <GridIcon icon={ require('./img/ic_naver_blog.png')} name="블로그" />
                    <GridIcon icon={ require('./img/ic_naver_kin.png')} name="지식인" />

                </View>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={ WIDTH }
                style={{ flex: 1 }}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}
                ref={'DRAWER_REF'}>
                <View
                    style={{ flexDirection: 'row', backgroundColor: '#16C643', height: 50, alignItems: 'center',
                        padding: 15 }}
                >
                    <TouchableWithoutFeedback
                        onPress={() => this.refs['DRAWER_REF'].openDrawer()}
                        style={{ flex: 1 }}
                    >
                        <Image
                            source={ require('./img/ic_menu.png') }
                        />
                    </TouchableWithoutFeedback>
                    <Image
                        resizeMode='contain'
                        style={{ flex: 5, alignSelf: 'center', height: 18 }}
                        source={ require('./img/icon_naver.png') }
                    />
                    <TouchableWithoutFeedback
                        onPress={() => this.props.navigator.pop()}
                        style={{ flex: 1 }}
                    >
                        <Image
                            source={ require('./img/ic_menu.png') }
                            style={{ opacity: 0 }}
                        />
                    </TouchableWithoutFeedback>
                </View>
                <View style={{ backgroundColor: '#16C643', height: 50, }}>
                    <View style={{ flex: 1, backgroundColor: 'white', height: 50,
                        marginLeft: 15, marginRight: 15, marginBottom: 12 }}/>
                </View>
                <ScrollableTabView
                    style={ styles.subcontainer }
                    renderTabBar={() => <DefaultTabBar />}
                    tabBarUnderlineStyle={{ backgroundColor: '#16C643', height: 3 }}
                    tabBarActiveTextColor="#16C643"
                    tabBarTextStyle={{ fontSize: 17, paddingTop: 7 }}
                >
                    <View tabLabel="뉴스" style={styles.tab}>
                        <WebView
                            source={{ uri: 'https://m.naver.com' }}
                            style={{ flex: 1, }}
                        />
                    </View>
                    <View tabLabel="연예" style={styles.tab}>
                        <WebView
                            source={{ uri: 'https://m.naver.com' }}
                            style={{ flex: 1, }}
                        />
                    </View>
                    <View tabLabel="스포츠" style={styles.tab}>
                        <WebView
                            source={{ uri: 'https://m.naver.com' }}
                            style={{ flex: 1, }}
                        />
                    </View>
                    <View tabLabel="쇼핑" style={styles.tab}>
                        <WebView
                            source={{ uri: 'https://m.naver.com' }}
                            style={{ flex: 1, }}
                        />
                    </View>
                    <View tabLabel="푸드" style={styles.tab}>
                        <WebView
                            source={{ uri: 'https://m.naver.com' }}
                            style={{ flex: 1, }}
                        /><Text>푸드</Text>
                    </View>
                </ScrollableTabView>
            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subcontainer: {
        backgroundColor: 'white',
    },
    tab: {
        flex: 1,
    },
    detailTitle: {
        fontSize: 22,
        color: '#455b66',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
    },
    detailContent: {
        fontSize: 14,
        color: '#677881',
        marginTop: 15,
        marginLeft: 18,
        marginRight: 10,
    },
});