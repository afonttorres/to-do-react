export class DateMapper {
    datelocalToDate(dateString) {
        let date = dateString.split("T")[0].split("-");
        let hour = dateString.split("T")[1].split(":");
        return new Date(date[0], +date[1] + 1, date[2], hour[0], hour[1]);
    }
}