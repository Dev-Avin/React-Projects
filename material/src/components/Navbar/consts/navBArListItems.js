import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import StorageIcon from '@mui/icons-material/Storage';
import CollectionsIcon from '@mui/icons-material/Collections';
import PublicIcon from '@mui/icons-material/Public';
import CodeIcon from '@mui/icons-material/Code';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

// Sub Bar Icons 
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TimerIcon from '@mui/icons-material/Timer';
import ScienceIcon from '@mui/icons-material/Science';
export const mainNavBarItems = [
    {
        id: 0,
        icon: <PeopleAltRoundedIcon/> ,
        label : "Authentication" ,
        route : "authenticate"
    
    } ,
    //  Hosting , Functions , Machine Learning 
    {
        id:1 ,
        icon: <StorageIcon/> ,
        label : "Data-Base" ,
        route : "database"
    
    } ,
    {
        id: 2,
        icon: <CollectionsIcon/> ,
        label : "Storage" ,
        route : "storage"
    
    } ,
    
    {
        id:3 ,
        icon: <PublicIcon/> ,
        label : "Hosting " ,
        route : "hosting"
    
    } ,
    
    {
        id: 4 ,
        icon:  <CodeIcon/>,
        label : "Functions" ,
        route : "functions"
    
    } ,

    {
        id: 4 ,
        icon: <PrecisionManufacturingIcon/> ,
        label : "Machine Learning" ,
        route : "machineLearning"
    
    } 
    
    
]
// QUALITY
// Analytics , Performance , Lab Test
export const subNavBarItems = [
    {
        id: 0,
        icon: <AnalyticsIcon/> ,
        label : "Analytics" ,
        route : "analytics"
    
    } ,
    {
        id: 1 ,
        icon: <TimerIcon/> ,
        label : "Performance" ,
        route : "performance"
    
    } ,
    {
        id: 2 ,
        icon: <ScienceIcon/> ,
        label : "Lab Test" ,
        route : "labTest"
    
    } 
]