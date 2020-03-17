import React from 'react';
const Head = (props) => {
  // `props.~~~` で
  console.log(props.list);
  
  return (
    <thead>
      <tr>
        { props.list.map((item) => {
          return (
            <th>
              { item }
            </th>
          );
        }) }
      </tr>
    </thead>
  );
};

const Body = (props) => {
  // `<tr>`を纏めて生成するための
  // ローカル内のコンポーネント
  const Tds = (props) => {
    return(
      <>
        <td>
          {props.object.id}
        </td>

        <td>
          {props.object.name}
        </td>

        <td>
          {props.object.isOtaku.toString()}
        </td>
     </>

    );
  };

  return(
    <tbody>
      { props.list.map((item) => {
        return(
          <tr>
            <Tds object={item} />
          </tr>
        );
      }) }
    </tbody>
  )
};

export default function Table(props){
  const headList = ['ID', 'Name', 'isOtaku'];
  const bodyElements = [
    {
      id: 1,
      name: 'Sister Cleaire',
      isOtaku: false
    },
    {
      id: 2,
      name: 'Yashiro Kidsuku',
      isOtaku: true
    },
    {
      id: 3,
      name: 'Otogibara Era',
      isOtaku: true
    }
  ];
  return(
    <table>
      <Head list={headList}/>
      <Body list={bodyElements} />
    </table>
  )
};