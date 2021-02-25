import { Container, Col, Row, Spinner } from "react-bootstrap";
import TableItem from "./TableItem";
import * as tableAPI from "../../lib/api/table";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function TableContainer({ history }) {
  const [Table, setTable] = useState();

  // 유저 가게 아이디 가져오기
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));

  // 유저의 선택한 가게 가져오기
  const storeid = user.nowstore;

  // 테이블 리스트 가져오기
  const tableList = async () => {
    const result = await tableAPI.tableList(storeid);

    setTable(
      result.data.map((table, index) => {
        return <TableItem key={table._id} table={table} index={index} />;
      })
    );
  };

  useEffect(() => {
    tableList();
    return () => {};
  }, []);

  return (
    <>
      {Table !== undefined ? (
        <Container
          fluid
          className="d-flex h-100 w-100 p-2 flex-column"
          style={{
            height: "100%",
            padding: 0,
            margin: 0,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <Row className="pl-4 m-1 pt-5 pb-3 h-100 " style={{ flex: 0 }}>
            <Col>
              <h1>§ 현재 매장 정보</h1>
            </Col>
          </Row>
          <Row
            className="h-100 pl-5 pr-5 pb-0 pt-0 mb-4 text-center"
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              margin: "10px auto",
              backgroundColor: "rgba(61, 74, 150, 0.1)",
              width: "100%",
              maxWidth: "1400px",
              borderRadius: "8px 8px",
            }}
          >
            {Table}
          </Row>
        </Container>
      ) : (
        <Container
          fluid
          className="d-flex h-100 flex-column w-100  justify-content-center "
          style={{
            overflow: "hidden",
            height: "100%",
            padding: 0,
            margin: 0,
            backgroundColor: "rgb(249,250,252)",
          }}
        >
          <Row className="text-center">
            <Col lg={{ span: 12 }}>
              <Spinner
                animation="border"
                role="status"
                style={{
                  verticalAlign: "center",
                }}
              >
                <span className="sr-only">Loading...</span>
              </Spinner>
              <h1 className={"d-inline-block text-center m-0 ml-2"}>
                {" "}
                로딩중입니다...
              </h1>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
