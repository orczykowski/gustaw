# Create a new calculator

Use this skill when the user asks to add a new calculator to the Gustaw app.

## Checklist

Ask the user for the following before starting (if not already provided):
- **Polish name** for the route (e.g. `waga`, `bmi`) — used in the URL `/kalkulator/<name>`
- **Polish display name** for the nav sub-item and page heading
- **What the calculator computes** — so you can design the service method signature

---

## Step 1 — Create the directory and files

All files go in:
```
src/app/features/calculator/<name>/
```

### `<name>.service.ts`
```typescript
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class <Name>Service {
  calculate(/* inputs */): <ResultType> {
    // core calculation logic
  }
}
```

### `<name>.service.spec.ts`
```typescript
import {<Name>Service} from './<name>.service';

describe('<Name>Service', () => {
  let service: <Name>Service;
  beforeEach(() => { service = new <Name>Service(); });
  it('should ...', () => {
    expect(service.calculate(...)).toEqual(...);
  });
});
```

### `<name>.component.ts`
```typescript
import {Component, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {<Name>Service} from './<name>.service';
import {SeoService} from '../../../core/seo.service';

@Component({
  selector: 'app-<name>',
  templateUrl: './<name>.component.html',
  styleUrls: ['./<name>.component.css'],
  standalone: false
})
export class <Name>Component implements OnInit {
  result: <ResultType> | null = null;

  form = new UntypedFormGroup({
    // fields with Validators
  });

  constructor(private service: <Name>Service, private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: '<Polish page title>',
      description: '<Polish meta description>'
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    this.result = this.service.calculate(/* form values */);
  }
}
```

### `<name>.component.html`
Follow the pattern from `age-calculator.component.html`:
- `.calculator` wrapper with `.calc-hero` section (icon, h1, subtitle)
- Form wrapped in a `.age-form`-style card with a `.age-input-row`
- Result section shown with `*ngIf="result !== null"` using `.age-result` + `.result-cards`

### `<name>.component.css`
Copy `age-calculator.component.css` as a starting point — it contains the complete shared design tokens (hero, form card, result cards, responsive breakpoints).

---

## Step 2 — Register in AppModule

In `src/app/app.module.ts`, add:
```typescript
import {<Name>Component} from './features/calculator/<name>/<name>.component';
// in declarations array:
<Name>Component,
```

---

## Step 3 — Add route

In `src/app/app-routing.module.ts`, add:
```typescript
import {<Name>Component} from './features/calculator/<name>/<name>.component';
// in routes array:
{path: 'kalkulator/<route-segment>', component: <Name>Component},
```

---

## Step 4 — Add nav sub-item

In `src/app/app.component.html`, inside `.nav-dropdown-menu`, add:
```html
<a routerLink="/kalkulator/<route-segment>" routerLinkActive="active"
   class="nav-dropdown-item" (click)="calcMenuOpen=false"><Polish label></a>
```

---

## Step 5 — Optionally add to footer

In `src/app/app.component.html`, inside `.footer-links`, add:
```html
<span class="footer-dot"></span>
<a routerLink="/kalkulator/<route-segment>" class="footer-link"><Polish label></a>
```

---

## Step 6 — Verify

Run `ng build --configuration=development` and confirm no TypeScript errors before reporting done.
