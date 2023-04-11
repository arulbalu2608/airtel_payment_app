import React, {Component} from 'react';
import {
  FlatList,
  Image,
  PermissionsAndroid,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Contacts from 'react-native-contacts';
import {connect} from 'react-redux';
import Card from '../Components/Card';
import Header from '../Components/Header';
import SearchBox from '../Components/SearchBox';
import closeIcon from '../assets/close.png';
import filterIcon from '../assets/filter_line.png';
import {styles} from './styles.js';

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      search: '',
      planData: [],
      contactList: [],
      tab: [
        {
          id: 1,
          label: 'money saver',
        },
        {
          id: 2,
          label: 'entertainment',
        },
        {
          id: 3,
          label: 'basic',
        },
      ],
      filterOption: [100, 200, 300, 400],
      filterSpeed: [],
      filterPlan: [],
      activeTab: 1,
      showFilter: false,
    };
  }
  componentDidMount() {
    this.getContacts();
    this.setState({
      planData: this.props.rechargePlan.filter(data => data.finalPrice < 1000),
    });
  }

  getContacts = async () => {
    try {
      const permission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      );

      if (permission) {
        const contacts = await Contacts.getAll();
        const temp = contacts.map((data, index) => {
          return {
            _id: index,
            name: data.displayName,
            number: data.phoneNumbers[0]?.number,
          };
        });

        const sortedContacts = temp.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        this.setState({
          contactList: sortedContacts,
        });
      } else {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: 'Contacts Permission',
            message: 'This app needs access to your contacts.',
          },
        );
        console.log(granted);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          const contacts = await Contacts.getAll();
          console.log(contacts);
        } else {
          console.log('Contacts permission denied');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleSearch = searchText => {
    let searchData = this.props.rechargePlan.filter(data => {
      return (
        String(data['finalPrice']).includes(searchText) ||
        String(data['speed']).includes(searchText) ||
        String(data['validity']).includes(searchText)
      );
    });

    this.setState({
      search: searchText,
      planData: searchData,
    });
  };

  handleTab = id => {
    let finalList = this.props.rechargePlan.filter(data =>
      id === 1 ? data.finalPrice < 1000 : id === 2 ? data.speed > 100 : data,
    );

    this.setState({
      activeTab: id,
      planData: finalList,
    });
  };

  handleFilter = () => {
    this.setState({
      showFilter: !this.state.showFilter,
      filterData: [],
    });
  };

  applyFilter = filterData => {
    if (this.state.filterSpeed.includes(filterData)) {
      let temp = this.state.filterPlan.filter(
        data => data.speed !== filterData,
      );
      this.setState({
        filterSpeed: this.state.filterSpeed.filter(data => data !== filterData),
        filterPlan: temp,
      });
    } else {
      let temp = this.props.rechargePlan.filter(
        data => data.speed === filterData,
      );
      this.setState({
        filterSpeed: [...this.state.filterSpeed, filterData],
        filterPlan: [...this.state.filterPlan, ...temp],
      });
    }
  };

  render() {
    return (
      <>
        <Header contactList={this.state.contactList} />

        <View style={styles.container}>
          {this.state.showFilter ? (
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity onPress={this.handleFilter}>
                <Image source={closeIcon} style={styles.icon} />
              </TouchableOpacity>
              <ScrollView horizontal={true}>
                {this.state.filterOption.map((data, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={
                        this.state.filterSpeed.includes(data)
                          ? styles.activeFilter
                          : styles.filterBoxContainer
                      }
                      onPress={() => this.applyFilter(data)}>
                      <Text
                        style={
                          this.state.filterSpeed.includes(data)
                            ? styles.activeFilterText
                            : styles.filterText
                        }>{`${data} Mbps`}</Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          ) : (
            <View style={styles.searchContainer}>
              <SearchBox
                search={this.state.search}
                handleSearch={this.handleSearch}
              />
              <TouchableOpacity
                style={styles.iconStyle}
                onPress={this.handleFilter}>
                <Image source={filterIcon} style={styles.icon} />
              </TouchableOpacity>
            </View>
          )}

          {this.state.search.length === 0 && (
            <View style={styles.tabContainer}>
              {this.state.tab.map(data => {
                return (
                  <TouchableOpacity
                    key={data.id}
                    onPress={() => this.handleTab(data.id)}>
                    <Text
                      style={
                        data.id === this.state.activeTab
                          ? styles.activeTab
                          : styles.tab
                      }>
                      {data.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}

          <FlatList
            data={
              this.state.filterPlan.length > 0
                ? this.state.filterPlan
                : this.state.planData
            }
            renderItem={({item}) => <Card item={item} />}
            keyExtractor={item => item._id}
          />
        </View>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {rechargePlan: state?.reducer?.rechargePlan};
};

export default connect(mapStateToProps)(Home);
