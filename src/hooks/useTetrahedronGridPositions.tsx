import { useMemo } from "react";
import type { UsersData } from "../models/dataUsers";

export const useTetrahedronGridPositions = (usersData: UsersData) => {
  const totalFaces = 4;

  const rowsArr = useMemo(() => {
    const itemsPerFace = usersData.items.length / totalFaces;
    let rowCount = Math.floor(Math.sqrt(2 * itemsPerFace));

    if ((rowCount * (rowCount + 1)) / 2 > itemsPerFace) {
      rowCount--;
    }

    return Array.from({ length: rowCount }, (_, index) => index + 1);
  }, [usersData.items.length]);
  
  const currentData = useMemo(() => {
    const totalRows = rowsArr.length;
    const cursor = {
      face: 1,
      rowIndex: 0,
      x: 1,
      y: 0,
      z: 0,
    };

    return usersData.items.map((data) => {
      const rowLimit = rowsArr[cursor.rowIndex];
      const centerOffset = (rowLimit - 1) / 2;

      const centeredX = cursor.x - 1 - centerOffset;
      const centeredZ = cursor.z - 1 - centerOffset;

      let finalPosition = { x: 0, y: 0, z: 0 };

      switch (cursor.face) {
        case 3:
          finalPosition = { x: cursor.x, y: cursor.y, z: centeredZ };
          break;
        case 4:
          finalPosition = { x: centeredX, y: cursor.y, z: cursor.z };
          break;
        default:
          finalPosition = { x: centeredX, y: cursor.y, z: cursor.z };
          break;
      }

      const result = {
        ...data,
        posX: finalPosition.x,
        posY: finalPosition.y,
        posZ: finalPosition.z,
        faces: cursor.face,
      };

      const isLastRow = cursor.rowIndex === totalRows - 1;

      switch (cursor.face) {
        case 3:
          if (cursor.z >= rowLimit) {
            if (isLastRow) {
              cursor.face++;
              cursor.x = 1;
              cursor.y = 0;
              cursor.z = 0;
              cursor.rowIndex = 0;
            } else {
              cursor.rowIndex++;
              cursor.x += 0.5;
              cursor.y++;
              cursor.z = 1;
            }
          } else {
            cursor.z++;
          }
          break;

        case 4:
          if (cursor.x >= rowLimit) {
            if (isLastRow) {
              cursor.face++;
              cursor.x = 1;
              cursor.y = 0;
              cursor.z = 0;
              cursor.rowIndex = 0;
            } else {
              cursor.rowIndex++;
              cursor.x = 1;
              cursor.z++;
            }
          } else {
            cursor.x++;
          }
          break;

        default:
          if (cursor.x >= rowLimit) {
            if (isLastRow) {
              cursor.face++;
              cursor.x = 1;
              cursor.y = 0;
              cursor.rowIndex = 0;
              cursor.z = cursor.face === 3 ? 1 : 0;
            } else {
              cursor.rowIndex++;
              cursor.x = 1;
              cursor.y++;
              cursor.z = 0;
            }
          } else {
            cursor.x++;
            cursor.z += 0.5;
          }
          break;
      }

      return result;
    });
  }, [rowsArr, usersData.items]);

  return currentData;
};
