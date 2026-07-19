import './styles.css';
import { CanvasEngine } from './engine.js';

const canvas = document.getElementById('canvas');
const engine = new CanvasEngine(canvas);

engine.start();
