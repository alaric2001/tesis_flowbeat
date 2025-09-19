import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, SafeAreaView } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router'; // Import useRouter di sini

const Header = ({ router }) => ( // Terima 'router' sebagai prop
    <TouchableOpacity onPress={() => router.push('/akun')}>
        <View style={styles.headerContainer}>
        <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=68' }}
            style={styles.profileImage}
        />
        <Text style={styles.headerText}>Halo, Hidayat Taufiq</Text>
        </View>
    </TouchableOpacity>
    );

    const HealthCard = ({ icon, title, value, unit, status, color }) => (
    <TouchableOpacity style={[styles.healthCard, { backgroundColor: color }]}>
        <View style={styles.cardContent}>
        <View style={styles.cardInfo}>
            {icon}
            <Text style={styles.cardTitle}>{title}</Text>
            <View style={styles.valueContainer}>
            <Text style={styles.valueText}>{value}</Text>
            <Text style={styles.unitText}>{unit}</Text>
            </View>
            <View style={styles.statusLabel}>
            <Text style={styles.statusText}>{status}</Text>
            </View>
        </View>
        <Ionicons name="arrow-forward-sharp" size={24} color="#555" />
        </View>
    </TouchableOpacity>
    );

    const EmergencyCallCard = () => (
    <TouchableOpacity onPress={() => Linking.openURL('tel:112')} style={[styles.emergencyCard]}>
        <View style={styles.emergencyContent}>
        <Ionicons name="call" size={36} color="#fff" style={styles.emergencyIcon} />
        <View style={styles.emergencyInfo}>
            <Text style={styles.emergencyNumber}>112</Text>
            <Text style={styles.emergencyText}>Panggilan Darurat</Text>
        </View>
        </View>
    </TouchableOpacity>
    );


    export default function App() {
    const router = useRouter(); // Dapatkan hook useRouter di sini
    return (
        <SafeAreaView style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />
        {/* Teruskan 'router' sebagai prop */}
        <Header router={router} /> 
        <View style={styles.mainContent}>
            <HealthCard
            icon={<Ionicons name="heart-outline" size={32} color="#555" />}
            title="Detak Jantung"
            value="77"
            unit="BPM"
            status="Normal"
            color="#e0eaff"
            />
            <HealthCard
            icon={<FontAwesome5 name="wind" size={28} color="#555" />}
            title="Oksigen Tubuh"
            value="98"
            unit="%"
            status="Normal"
            color="#e0eaff"
            />
            <EmergencyCallCard />
        </View>
        </SafeAreaView>
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginTop: 20, // Tambahkan margin atas
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 15,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    mainContent: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    healthCard: {
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardInfo: {
        flexDirection: 'column',
    },
    cardTitle: {
        fontSize: 16,
        color: '#555',
    },
    valueContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 5,
    },
    valueText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#333',
    },
    unitText: {
        fontSize: 24,
        color: '#555',
        marginLeft: 5,
        marginBottom: 5,
    },
    statusLabel: {
        backgroundColor: '#d3f9d3',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginTop: 10,
        alignSelf: 'flex-start',
    },
    statusText: {
        color: '#1e7e34',
        fontWeight: 'bold',
        fontSize: 12,
    },
    emergencyCard: {
        backgroundColor: '#ff9999',
        borderRadius: 15,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    emergencyContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    emergencyIcon: {
        marginRight: 15,
    },
    emergencyInfo: {
        flexDirection: 'column',
    },
    emergencyNumber: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
    },
    emergencyText: {
        fontSize: 16,
        color: '#fff',
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        backgroundColor: '#f8f8f8',
        marginBottom: 10, // Tambahkan margin bawah
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        fontSize: 12,
        color: '#555',
        marginTop: 4,
    },
});