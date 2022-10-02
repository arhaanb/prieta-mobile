import React, { useEffect } from 'react'
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import global from '../styles'
import { getToken } from '../tokenFunc'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { useIsFocused } from '@react-navigation/native'

export default function App({ route, navigation }) {
	const isFocused = useIsFocused()

	useEffect(() => {
		getInitialData()
	}, [isFocused])

	const getInitialData = async () => {
		await getToken('accessToken').then((token) => {
			if (token?.length > 0) {
				navigation.navigate('Profile')
			}
		})
	}

	return (
		<ScrollView
			style={{
				backgroundColor: '#FDF3E6'
			}}
		>
			<View
				style={[
					global.onboardcontainer,
					{
						paddingTop: hp('100%') >= 750 ? hp('12%') : hp('7%'),
						height: hp('85%'),
						marginTop: 20
					}
				]}
			>
				<Image
					style={{
						height: 236 * wp('0.25%') * 2,
						width: 214 * wp('0.25%') * 2,
						marginTop: hp('15%'),
						marginLeft: -100,
						marginTop: -20
					}}
					source={require('../assets/onboard/prieta.png')}
				/>
			</View>
			<View
				style={[
					global.onboardcontainer,
					{
						backgroundColor: '#FDF3E6',
						position: 'relative',
						display: 'flex',
						alignItems: 'flex-end'
					}
				]}
			>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('Login')
					}}
				>
					<Image
						style={{ height: 406.67 * 0.135, width: 610 * 0.135 }}
						source={require('../assets/onboard/button.png')}
					/>
				</TouchableOpacity>
			</View>
		</ScrollView>
	)
}
