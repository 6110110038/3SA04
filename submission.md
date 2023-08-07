นายณัฐพงค์ ปิติศรีพัฒนรากุล 6110110038
##	First Commit
ปรับปรุงส่วนแสดงผลใน ZipCodeScreen.js ด้วยการจัด component บางอันใหม่ และเพิ่ม styles

	export default function ZipCodeScreen() {
		const navigation = useNavigation();
		return (
			<ImageBackground source={require('../main-bg.jpg')} style={styles.backgroundImage}>
				<View style={styles.header}>
					<Text style={styles.headerText}>เลือกเมืองที่ต้องการทราบสภาพอากาศ</Text>
				</View>
				<FlatList
					data={availableZipItems}
					keyExtractor={(item) => item.code}
					renderItem={({ item }) => <ZipItem place={item} navigation={navigation} />}
				/>
			</ImageBackground>
		);
	}


เพิ่ม styles

	const styles = StyleSheet.create({
		backgroundImage: {
			flex: 1,
			resizeMode: 'cover',
			justifyContent: 'center',
			alignItems: 'center',
		},
		header: {
			backgroundColor: "rgba(255, 255, 255, 0.4)",
		    padding: 10,
		    marginBottom: 10,
		    width: '100%',
		},
		headerText: {
		    fontSize: 20,
		    fontWeight: 'bold',
		    textAlign: 'center',
		},
		ZipItem: {
		    flexDirection: "row",
		    justifyContent: "center",
		    padding: 10,
		    backgroundColor: "rgba(255, 255, 255, 0.6)",
		    marginVertical: 5,
		    borderRadius: 10,
		    width: '100%',
		},
		ZipPlace: {
			fontSize: 18,
		},
	});

##	Second Commit
ปรับปรุงในส่วนของ Forecast.js เพิ่มการแสดงผลของ component pressure เพิ่ม

    <View>
        <Text>pressure: </Text>
        <Text>{props.pressure}</Text>
    </View>
และปรับ components ใน Weather.js ด้วย

    useEffect(() => {
	    console.log(`fetching data with zipCode = ${props.zipCode}`);
	    if (props.zipCode) {
			fetch(
		        `http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=8cb7f9896520ec946afc99687045938b`
		    )
	        .then((response) => response.json())
	        .then((json) => {
		        setForecastInfo({
		            main: json.weather[0].main,
		            description: json.weather[0].description,
		            temp: json.main.temp,
		            pressure: json.main.pressure,
				});
	        })
	        .catch((error) => {
	          console.warn(error);
	        });
	    }
	}, [props.zipCode]);

## Third Commit
สร้างส่วนแสดงผล styles สำหรับ Forcast.js

	export default function Forecast(props) {
		return (
		    <View style={styles.container}>
		        <View style={styles.cityContainer}>
			        <Text style={styles.cityText}>City: {props.name}</Text>
		        </View>
		        <Text style={styles.weatherMain}>{props.main}</Text>
		        <Text style={styles.weatherDescription}>Weather: {props.description}</Text>
		        <View style={styles.tempContainer}>
			        <Text style={styles.tempText}>Temperature: {props.temp} °C</Text>
		        </View>
		        <View style={styles.pressureContainer}>
			        <Text style={styles.pressureText}>Pressure: {props.pressure / 1000} atm</Text>
		      </View>
		    </View>
		);
	}

เรียกใช้งานฟังก์ชัน useEffact เพิ่มการใช้ตัวจับเวลา โดยให้ตัวจับเวลายังทำงานอยู่ หากคะแนนยังไม่เป็น 0
ใน activationHandler เพิ่มส่วนการคำนวนคะแนน และ state ใหม่ นั่นคือ gameOver

	const styles = StyleSheet.create({
		container: {
		    backgroundColor: "rgba(255, 255, 255, 0.5)",
		    padding: 20,
		    borderRadius: 10,
		    alignItems: "center",
		    justifyContent: "center",
		    marginTop: 20,
		},
		cityContainer: {
			marginBottom: 10,
		},
		cityText: {
		    fontSize: 20,
		    fontWeight: "bold",
		},
		weatherMain: {
		    fontSize: 24,
		    marginBottom: 5,
		    color: "#333",
		},
		weatherDescription: {
		    fontSize: 18,
		    marginBottom: 10,
		    color: "#555",
		},
		 tempContainer: {
		    marginBottom: 5,
		},
		tempText: {
		    fontSize: 18,
		    color: "#333",
	    },
	    pressureContainer: {
		    marginBottom: 10,
	    },
		pressureText: {
		    fontSize: 16,
		    color: "#777",
		},
	});
## Forth Commit
เพิ่มไลบรารี่เกี่ยวกับไอคอนของรีแอค และสร้างฟังก์ชันเงื่อนไข เพื่อใช้สำหรับการแสดงผลสภาพอากาศต่าง ๆ

    import Icon from "react-native-vector-icons/FontAwesome"; // Import icons from the library
    
    export default function Forecast(props) {
	    let icon = "question";
	    
	    if (props.main === "Clear") {
		    icon = "sun-o";
		} else if (props.main === "Clouds") {
		    icon = "cloud";
		} else if (props.main === "Rain") {
			icon = "tint";
		}
ปรับปรุงส่วน return

    return (
	    <View style={styles.container}>
	      {}
	      <Icon name={icon} size={80} color="#333" />

	      <View style={styles.weatherInfo}>
	        <Text style={styles.weatherMain}>{props.main}</Text>
	        <Text style={styles.weatherDescription}>{props.description}</Text>
	        <View style={styles.tempContainer}>
	          <Text style={styles.tempText}>Temperature: {props.temp} °C</Text>
	        </View>
	        <View style={styles.pressureContainer}>
	          <Text style={styles.pressureText}>
	            Pressure: {props.pressure / 1000} atm
	          </Text>
	        </View>
	      </View>
	    </View>
    );

เพิ่ม styles

	weatherInfo: {
	    marginTop: 10,
	    alignItems: "center",
	}
## Fifth Commit
พาร์ทนี้เดิมทีตั้งใจไว้ว่าจะใส่พื้นหลังเป็นวิดีโอ แต่มีบัคบางอย่างทำให้รันโปรเจกไม่ได้ จึงเอาออกไป เลยได้แค่ติดตั้งตัวไลบรารี่ไว้เท่านั้น
