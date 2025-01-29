import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  provideHttpClient,
  withInterceptors,
  withJsonpSupport,
} from '@angular/common/http';

import { provideNativeDateAdapter } from '@angular/material/core';

import { NgeMonacoModule } from '@cisstech/nge/monaco';

import { authJwtInterceptor } from '@myrmidon/auth-jwt-login';
import { PROXY_INTERCEPTOR_OPTIONS } from '@myrmidon/cadmus-refs-lookup';
import {
  CADMUS_TEXT_ED_SERVICE_OPTIONS_TOKEN,
  CADMUS_TEXT_ED_BINDINGS_TOKEN,
} from '@myrmidon/cadmus-text-ed';
import { TxtEmojiCtePlugin } from '@myrmidon/cadmus-text-ed-txt';
import {
  MdBoldCtePlugin,
  MdItalicCtePlugin,
  MdLinkCtePlugin,
} from '@myrmidon/cadmus-text-ed-md';
import { GEONAMES_USERNAME_TOKEN } from '@myrmidon/cadmus-refs-geonames-lookup';
import { WHG_USERNAME_TOKEN } from '@myrmidon/cadmus-refs-whg-lookup';

import { INDEX_LOOKUP_DEFINITIONS } from './index-lookup-definitions';
import { ITEM_BROWSER_KEYS } from './item-browser-keys';
import { PART_EDITOR_KEYS } from './part-editor-keys';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withViewTransitions()),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([authJwtInterceptor]),
      withJsonpSupport()
    ),
    provideNativeDateAdapter(),
    importProvidersFrom(NgeMonacoModule.forRoot({})),
    // parts and fragments type IDs to editor group keys mappings
    // https://github.com/nrwl/nx/issues/208#issuecomment-384102058
    // inject like: @Inject('partEditorKeys') partEditorKeys: PartEditorKeys
    {
      provide: 'partEditorKeys',
      useValue: PART_EDITOR_KEYS,
    },
    // index lookup definitions
    {
      provide: 'indexLookupDefinitions',
      useValue: INDEX_LOOKUP_DEFINITIONS,
    },
    // item browsers IDs to editor keys mappings
    // inject like: @Inject('itemBrowserKeys') itemBrowserKeys: { [key: string]: string }
    {
      provide: 'itemBrowserKeys',
      useValue: ITEM_BROWSER_KEYS,
    },
    // text editing plugins
    MdBoldCtePlugin,
    MdItalicCtePlugin,
    TxtEmojiCtePlugin,
    MdLinkCtePlugin,
    // provide a factory so that plugins can be instantiated via DI
    {
      provide: CADMUS_TEXT_ED_SERVICE_OPTIONS_TOKEN,
      useFactory: (
        mdBoldCtePlugin: MdBoldCtePlugin,
        mdItalicCtePlugin: MdItalicCtePlugin,
        mdEmojiCtePlugin: TxtEmojiCtePlugin,
        mdLinkCtePlugin: MdLinkCtePlugin
      ) => {
        return {
          plugins: [
            mdBoldCtePlugin,
            mdItalicCtePlugin,
            mdEmojiCtePlugin,
            mdLinkCtePlugin,
          ],
        };
      },
      deps: [
        MdBoldCtePlugin,
        MdItalicCtePlugin,
        TxtEmojiCtePlugin,
        MdLinkCtePlugin,
      ],
    },
    // monaco bindings for plugins
    // 2080 = monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyB;
    // 2087 = monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyI;
    // 2083 = monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyE;
    // 2090 = monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyL;
    {
      provide: CADMUS_TEXT_ED_BINDINGS_TOKEN,
      useValue: {
        2080: 'md.bold', // Ctrl+B
        2087: 'md.italic', // Ctrl+I
        2083: 'txt.emoji', // Ctrl+E
        2090: 'md.link', // Ctrl+L
      },
    },
    // GeoNames lookup (see environment.prod.ts for the username)
    {
      provide: GEONAMES_USERNAME_TOKEN,
      useValue: 'myrmex',
    },
    {
      provide: WHG_USERNAME_TOKEN,
      useValue: 'myrmex',
    },
    // proxy
    {
      provide: PROXY_INTERCEPTOR_OPTIONS,
      useValue: {
        proxyUrl: (window as any).__env?.apiUrl + 'proxy',
        urls: [
          'http://lookup.dbpedia.org/api/search',
          'http://lookup.dbpedia.org/api/prefix',
        ],
      },
    },
  ],
};
