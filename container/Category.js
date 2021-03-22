import React, { Component } from 'react';
import {View, ScrollView, Text, Pressable} from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomSheet, ListItem, Divider } from "react-native-elements";
import CatHeader from "../component/CatHeader";
import CategoryCard from "../component/CategoryCard";
import Icon from 'react-native-vector-icons/FontAwesome5';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subCats: [],
            showSubCats: false,
            catTitle: ""
        }
    }
    categories = [
        {
            id: 1,
            title: "Antique",
            image: "https://cayzilla.polbd.com/images/antique.png",
            sub: [
                {
                    id: 10,
                    title: "Antiquities"
                },
                {
                    id: 11,
                    title: "Architectural & Garden"
                },
                {
                    id: 12,
                    title: "Asian Antique",

                },
                {
                    id: 13,
                    title: "Decorative Art"
                },
                {
                    id: 14,
                    title: "Ethnographic"
                },
                {
                    id: 15,
                    title: "Furniture"
                },
                {
                    id: 16,
                    title: "Home & Health"
                },
                {
                    id: 17,
                    title: "Incubula"
                },
                {
                    id: 18,
                    title: "Manuscripts"
                },
                {
                    id: 19,
                    title: "Maps & Globes"
                },
                {
                    id: 20,
                    title: "Maritime"
                },
                {
                    id: 21,
                    title: "Health & Exercise"
                },
                {
                    id: 22,
                    title: "Food"
                }
            ]
        },
        {
            id: 2,
            title: "Art",
            image: "https://cayzilla.polbd.com/images/art.png"
        },
        {
            id: 3,
            title: "Baby",
            image: "https://cayzilla.polbd.com/images/baby.png"
        },
        {
            id: 4,
            title: "Books",
            image: "https://cayzilla.polbd.com/images/books.png"
        },
        {
            id: 5,
            title: "Business",
            image: "https://cayzilla.polbd.com/images/business.png"
        },
        {
            id: 6,
            title: "Camera, Image & Accesories",
            image: "https://cayzilla.polbd.com/images/camera.png"
        },
        {
            id: 7,
            title: "Cell Phones & Accesories",
            image: "https://cayzilla.polbd.com/images/cell.png"
        },
        {
            id: 9,
            title: "Clothing",
            image: "https://cayzilla.polbd.com/images/clothing.png"
        }
    ];
    catClick = (id) => {
        console.log(id);
        //check if sub category exists
        let subCats = false;
        let catTitle = "";
        let categoryId = 0;
        this.categories.forEach(element => {
            let catId = element.id;
            if (catId == id) {
                subCats = element.sub ?? false;
                catTitle = element.title;
            }
        });

        if (subCats) {
            this.setState({
                showSubCats: true,
                subCats: subCats,
                catTitle: catTitle,
            });
        } else {
            this.setState({
                showSubCats: false
            });
            this.props.navigation.navigate('SingleCategory', {catId: categoryId, catTitle: catTitle});
        }
    }

    gotoCat = (id, title) => {
        this.setState({
            showSubCats: false
        });
        this.props.navigation.navigate('SingleCategory', {catId: id, catTitle: title});
    }

    hideSubCat = () => {
        this.setState({
            showSubCats: false
        });
    }

    render() {
        
        return(
            <SafeAreaProvider>
                <BottomSheet
                    isVisible={this.state.showSubCats}
                    containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0)' }}
                    >
                    <Pressable onPress={() => {this.hideSubCat()}} style={{backgroundColor: "#fff", paddingLeft: 10, paddingRight: 10, flexDirection: "row", paddingTop: 5, paddingBottom: 5}}>
                        <Icon
                            name='angle-up'
                            size={22}
                            iconStyle={{paddingTop: 20, paddingLeft: 20}} />
                        <Text style={{color: "#111820", fontSize: 22, fontWeight: "700", marginLeft: 5}}>{this.state.catTitle}</Text>
                    </Pressable>
                    <Divider style={{marginLeft: 10, marginRight: 10, backgroundColor: "#e5e5e5", height: 2}} />
                    {
                        this.state.subCats.map((l, i) => (
                            <ListItem onPress={() => {this.gotoCat(l.id, l.title)}} key={i} bottomDivider>
                                <ListItem.Content>
                                    <ListItem.Title>{l.title}</ListItem.Title>
                                </ListItem.Content>
                            </ListItem>
                        ))
                    }
                </BottomSheet>
                <ScrollView style={{backgroundColor: "#fff"}}>
                    <CatHeader />
                    <View style={{flexDirection: "row", flexWrap: "wrap", paddingLeft: 5, paddingRight: 5}}>
                        {this.categories.map((cat, index) => (
                        <CategoryCard 
                                key={index}
                                cols="2"
                                type="square"
                                borderBottom={true}
                                id={cat.id}
                                title={cat.title}
                                image={cat.image}
                                action={()=>{this.catClick(cat.id)}}
                            /> 
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaProvider>
        );
    }
}

export default Category;