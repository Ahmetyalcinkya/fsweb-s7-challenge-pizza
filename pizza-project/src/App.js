import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Success from "./Components/Success";
import OrderPage from "./Components/OrderPage";
import { Switch } from "react-router-dom";
import * as Yup from "yup";
import dummyData from "./Components/DummyData";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function App() {
  const formDataInitial = {
    pizzaName: dummyData[1].name,
    size: "",
    dough: "",
    toppingList: [],
    name: "",
    phone: "",
    address: "",
    note: "",
    count: 1,
    price: dummyData[1].price,
  };
  const errorData = {
    pizzaName: dummyData[1].name,
    size: "",
    dough: "",
    toppingList: "",
    name: "",
    phone: "",
    address: "",
    note: "",
    count: 1,
    price: dummyData[1].price,
  };
  const [formData, setFormData] = useState(formDataInitial);
  const [isValid, setValid] = useState(false);
  const [formErr, setFormErr] = useState(errorData);

  const totalPrice = () => {
    let price = dummyData[1].price;

    price += formData.toppingList.length * 5;

    price *= formData.count;

    return price;
  };

  const history = useHistory();

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .required("İsim giriniz.")
      .min(2, "Minimum 2 karakter giriniz."),
    size: Yup.string().required("Pizza boyutu seçiniz."),
    dough: Yup.string().required("Hamur kalınlığı seçiniz."),
    phone: Yup.string()
      .required("Bu alanın doldurulması zorunludur.")
      .min(10, "Geçerli bir telefon numarası giriniz."),
    toppingList: Yup.array()
      .min(2, "En az 2 ek malzeme seçmelisiniz.")
      .max(5, "En fazla 5 ek malzeme seçebilirsiniz."),
    address: Yup.string()
      .required()
      .min(15, "Geçerli bir adres bilgisi giriniz."),
    note: Yup.string(),
    count: Yup.number().positive(),
  });

  const changeHandler = (e) => {
    let { value, name, type, checked } = e.target;
    value = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: value });

    //! HATA KONTROLÜ

    Yup.reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErr({ ...formErr, [name]: "" });
      })
      .catch((err) => {
        setFormErr({ ...formErr, [name]: err.errors[0] });
      });
  };
  const checkChangeHandler = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      if (formData.toppingList.length === 10) {
        alert("En fazla 10 adet ek malzeme seçebilirsiniz.");
      } else {
        setFormData({
          ...formData,
          toppingList: [...formData.toppingList, name],
        });
      }
    } else {
      setFormData({
        ...formData,
        toppingList: [...formData.toppingList.filter((t) => t !== name)],
      });
    }
  };

  const submitHandler = (e) => {
    // e.preventDefault();
    axios.post("https://reqres.in/api/users", formData).then((res) => {
      console.log(formData);
      history.push("/success", { state: { formData } });
      setFormData(formDataInitial);
    });
    const {
      pizzaName,
      size,
      dough,
      toppings,
      note,
      count,
      price,
      name,
      phone,
      address,
    } = formData;
    const targetPath = `/success`;
    const dataToSend = {
      pizzaName,
      size,
      dough,
      toppings,
      note,
      count,
      price,
      name,
      phone,
      address,
    };
    history.push({
      pathname: targetPath,
      state: dataToSend,
    });
  };

  useEffect(() => {
    formSchema.isValid(formData).then((valid) => {
      setValid(valid);
    });
  }, [formData]);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/pizza" exact>
          <OrderPage
            formData={formData}
            isValid={isValid}
            formErr={formErr}
            changeHandler={changeHandler}
            submitHandler={submitHandler}
            totalPrice={totalPrice}
            checkChangeHandler={checkChangeHandler}
          />
        </Route>
        <Route path="/success" exact>
          <Success />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
