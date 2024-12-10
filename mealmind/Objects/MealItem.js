
//describes a meal item that will be genertaed. Will include name, image, and a description of how its relevant to user
const mealItem = ({ imageUrl, foodName, description, calories}) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.name}>{foodName}</Text>
        <Text style={styles.name}>{description}</Text>
        
        
  
      </View>
    );
  };

  const styles = StyleSheet.create({
    itemContainer: {
      flex: 1,
      padding: 10,
      margin: 10,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: '#ddd',
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 8,
    },
});

