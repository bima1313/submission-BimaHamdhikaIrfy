import type { DataSheet } from "../models/dataSheet";
import type { UserData, UsersData } from "../models/dataUsers";
import type { ServiceResponse } from "../models/generic";

export default async function usersService(token: string) {
  let rowValue = 1;
  let columnValue = 1;
  const maxRows = 20;
  const usersData: UsersData = { items: [] };
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
  
  if (data.error != null) {
    return { error: data.error } as ServiceResponse;
  } else if (data.values == null) {
    return { data: usersData } as ServiceResponse;
  } else {
    data.values.map((userData) => {
      if (rowValue > maxRows) {
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
      usersData.items.push(user);
      rowValue += 1;
    });
    const result = usersData;
    return { data: result } as ServiceResponse;
  }
}
