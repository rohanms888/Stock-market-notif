export class CompanyPrice {

    public change: number;
    public perChange: number;
    public currDate: any;
    public dataDate: any;
    public isMarketOpen = false;
    public currDateStr: string;
    public dataDateStr: string;
    public twoYearDateStr: string;

    constructor(
        public ticker: string,
        public timestamp: string,
        public last: number,
        public prevClose: number,
        public open: number,
        public high: number,
        public low: number,
        public mid: number,
        public volume: number, 
        public bidSize: number,
        public bidPrice: number,
        public askSize: number,
        public askPrice: number
    ){

        this.change = (last - prevClose);
        this.perChange = (this.change / prevClose * 100);

        this.change = parseFloat(this.change.toFixed(2));
        this.perChange = parseFloat(this.perChange.toFixed(2));
 
        this.dataDate = new Date(timestamp);
        this.currDate = new Date();

        // const dateTwoYears = new Date();
        // dateTwoYears.setFullYear(dateTwoYears.getFullYear() - 2);
        // this.twoYearDateStr = this.getDateStr(dateTwoYears);

        // console.log(this.currDate.toString());
        // console.log(this.timestamp);
        // console.log(this.dataDate.toString());

        console.log(timestamp);


        this.dataDateStr = this.getDateStr(this.dataDate) + ' ' + this.getDateTimeStr(this.dataDate);
        this.currDateStr = this.getDateStr(this.currDate) + ' ' + this.getDateTimeStr(this.currDate);

        console.log(this.currDate);
        console.log(this.dataDate);
        console.log((this.currDate - this.dataDate));
        console.log((this.currDate - this.dataDate) < 60*1000);
        

        if ((this.currDate - this.dataDate) < 60000) {

            this.isMarketOpen = true;
        }

        console.log(this.isMarketOpen);

    }

    getDateTimeStr(date: any) : string {

        let hr = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        

        if (sec.length < 2)
            sec = '0' + sec;

        return [hr, min, sec].join(':');
    }

    getDateStr(date: any) : string {
        let month = '' + (date.getMonth() + 1);
        let day = '' + date.getDate();
        let year = date.getFullYear();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        return [year, month, day].join('-');

    }


}

export interface PriceResponse {
    results: CompanyPrice[];
    success: boolean;
}