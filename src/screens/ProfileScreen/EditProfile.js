import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Header from '../../components/Header_1';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';
import EditPen from '../../assets/icons/edit_pen.svg';
import EditableRow from '../../components/Edit_row';

const EditProfile = () => {
  const [name, setName] = useState('Emmanuel');
  const [contact, setContact] = useState('9999-999-999');
  const [email, setEmail] = useState('emmanuel@muvn.com');

  const handleSave = () => {
    Keyboard.dismiss();
    // Save logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Edit Profile" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Profile Section */}
          <View style={styles.profileSection}>
            <View style={styles.profileWrapper}>
              <Image
                source={require('../../assets/payment_logo.png')}
                style={styles.profileImg}
              />
              <TouchableOpacity style={styles.editIcon}>
                <EditPen width={24} height={24} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputWrapper}>
            <EditableRow
              label="Name"
              value={name}
              onChangeText={setName}
              placeholder="Enter Name"
            />
            <EditableRow
              label="Contact"
              value={contact}
              onChangeText={setContact}
              placeholder="Enter Contact"
              keyboardType="phone-pad"
            />
            <EditableRow
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="Enter Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </ScrollView>

        {/* Bottom Button like PickupDropScreen */}
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Update"
            onPress={handleSave}
            style={styles.updateBtn}
            textStyle={styles.updateBtnText}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 22,
    marginBottom: 6,
  },
  profileWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImg: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 3,
    borderColor: Colors.highlights,
  },
  editIcon: {
    position: 'absolute',
    right: -8,
    bottom: 8,
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 4,
    borderWidth: 1,
    borderColor: Colors.inputbox,
    elevation: 1,
  },
  inputWrapper: {
    marginHorizontal: 24,
    marginTop: 12,
    flex: 1,
  },
  buttonContainer: {
    padding: 16,
    backgroundColor: Colors.white,
  },
  updateBtn: {
    backgroundColor: Colors.highlights,
    borderRadius: 14,
    minHeight: 52,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  updateBtnText: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default EditProfile;
