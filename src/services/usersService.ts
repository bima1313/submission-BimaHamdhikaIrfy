import type { DataSheet } from "../models/dataSheet";
import type { UserData, UsersData } from "../models/dataUsers";

export default async function usersService(token: string) {
  let rowValue = 1;
  let columnValue = 1;
  const usersData: UsersData = { data: [] };
  const sheetId = import.meta.env.VITE_SHEET_ID;
  const sheetRange = "'Data Template'!A2:F201";
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetRange}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const data = (await response.json()) as DataSheet;

  data.values.map((userData) => {
    if (rowValue > 20) {
      rowValue = 1;
      columnValue += 1;
    }
    const user = {
      name: userData[0],
      photo: userData[1],
      age: userData[2],
      country: userData[3],
      interest: userData[4],
      net_worth: userData[5],
      posX: rowValue,
      posY: columnValue,
    } as UserData;
    usersData.data.push(user);
    rowValue += 1;
  });

  const result = usersData;
  return result;
}
